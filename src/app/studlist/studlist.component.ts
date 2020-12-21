import { Component, OnInit } from '@angular/core';
import {SrvService} from '../services/jsonsrv/srv.service';
import {Student} from '../services/models/studentmodel';
import { FilterPipe } from 'ngx-filter-pipe';


@Component({
  selector: 'app-studlist',
  templateUrl: './studlist.component.html',
  styleUrls: ['./studlist.component.css']
})
export class StudlistComponent implements OnInit {


  userFilter: any = { group: '', stud: ''};
  
  constructor(private srv: SrvService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  students: Student[]=[];

  getStudents(){
    this.srv.getStudents().then(()=>(this.srv.students).forEach(student=>this.students.push(student)))
  }

  sortState = false;

  onSorting(){

    if (this.sortState == false){
      this.students.sort(function(a, b){
        var nameA=a.surname.toLowerCase(), nameB=b.surname.toLowerCase()
        if (nameA < nameB) //сортируем строки по возрастанию
          return -1
        if (nameA > nameB)
          return 1
        return 0 // Никакой сортировки
        })
        this.sortState=true;
    } else if (this.sortState == true){
      this.students.sort(function(a, b){
        var nameA=a.surname.toLowerCase(), nameB=b.surname.toLowerCase()
        if (nameA > nameB) //сортируем строки по убыванию
          return -1
        if (nameA < nameB)
          return 1
        return 0 // Никакой сортировки
        })
        this.sortState=false;
    }

  }

}
