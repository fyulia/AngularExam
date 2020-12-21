import {Injectable} from '@angular/core';
import {Student} from '../models/studentmodel';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SrvService {
  students: Student[] = [];
  link = 'http://localhost:3000/students/';
  options = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor(public http: HttpClient) {
  }

  async getStudents() {
    this.students = [];
    
   const data = await this.http
     .get(this.link)
     .toPromise();

    for (const index in data) {
      delete data[index].createdAt;
      delete data[index].updatedAt;
      this.students.push(data[index]);
    }
    
  }

  async addStudent(student: Student) {
    return this.http.post(this.link, student, this.options).toPromise();
  }

  async removeStudent(id: number) {
    let linkdel = this.link + id;
    return this.http.request('delete', linkdel, {body: {id}}).toPromise();
  }

  async editStudent(student: Student) {
     let link = this.link + student.id;
    return this.http.put(link, student, this.options).toPromise();
  }
}