import { NgModule, Component , OnInit } from "@angular/core";
import {CommonModule} from "@angular/common"


@NgModule({
  declarations:[],
  imports:[
    CommonModule
  ]
})

export class StudentService {
  constructor(){

  }

  students = [
    {
    id:1,
    name: 'Fede',
    status: 'present'
    },
    {
      id:2,
      name: 'Lina',
      status: 'absent'
    },
    {
      id:3,
      name: 'Clement',
      status: 'absent'
    },
    {
      id:4,
      name: 'Morgane',
      status: 'present'
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
  switchLateOne(i: number) {
    this.students[i].status = 'late';
  }

  getStudentById(id: number) {
    const student = this.students.find(
    (s) =>{    
      return s.id === id;
    }
    );
    return student;
  }
  

}
