import { Component, OnInit } from '@angular/core';
import {SrvService} from '../services/jsonsrv/srv.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-editoradd',
  templateUrl: './editoradd.component.html',
  styleUrls: ['./editoradd.component.css']
})
export class EditoraddComponent implements OnInit {

  id:number;

  studForm:FormGroup;
  disabledControl: boolean;

  constructor(private srv:SrvService, private activatedRouter:ActivatedRoute, private router: Router) {
    this.activatedRouter.params.subscribe(param => {this.id = parseInt(param.id,10)})
   }

  ngOnInit(): void {
    this.studForm = new FormGroup({
      surname: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      name: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      middlename: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      phone: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      email: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      birth: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      group: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required]),
      stud: new FormControl({value:'', disabled: this.disabledControl}, [Validators.required])
    })

    if (this.id){
      this.srv.getStudents().then(()=>{
        (this.srv.students).forEach(student=>{
          if (student.id === this.id){
            const item = student;
            delete item.id;
            this.studForm.setValue(item);
          }
        })  
      })
    }
  }

  onDelete(id){
    this.srv.removeStudent(id).then(()=>this.router.navigate(['/studlist']))
  }

  onAddStud(){
    const studnew = this.studForm.value;
    this.srv.addStudent(studnew).then(()=>{
      this.router.navigate(['/studlist']);
    })
  }

  isNaN(id:number){
    return isNaN(id);
  }

  onEditStud(id){
    const stud = this.studForm.value;
    stud.id = id;
    this.srv.editStudent(stud).then(()=>{
      this.router.navigate(['/studlist']);
    })
  }

}
