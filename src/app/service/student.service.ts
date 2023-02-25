import { NgModule, Component , OnInit } from "@angular/core";
import {CommonModule} from "@angular/common"
import { StudentViewComponent } from "../student-view/student-view.component";

@NgModule({
  declarations:[],
  imports:[
    CommonModule
  ]
})

export class StudentService {
  
  students = [
    {
    name: 'Fede',
    status: 'present'
    },
    {
      name: 'Lina',
      status: 'absent'

    },
    {
      name: 'Clement',
      status: 'late'
    }
  ];

  switchOnAll(){
    for(let student of this.students){
        student.status = 'present';
    }
  }
  
  switchOffAll(){
    for(let student of this.students){
      student.status = 'absent';
    }  
  }
  switchLate(){
    for(let student of this.students){
      student.status = 'late';
    }  
  }

  switchOnOne(i: number) {
    this.students[i].status = 'present';
  }

  switchOffOne(i: number) {
    this.students[i].status = 'absent';
  }


  

}
