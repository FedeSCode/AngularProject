import { NgModule, Component , OnInit } from "@angular/core";
import {CommonModule} from "@angular/common"
import {Subject} from "rxjs"

@NgModule({
  declarations:[],
  imports:[
    CommonModule
  ]
})

export class StudentService {
  studentsSubject = new Subject<any[]>();

  constructor(){

  }

  private students = [
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
      this.emitStudentSubject();
    }
  }

  switchOffAll(){
    for(let student of this.students){
      student.status = 'absent';
      this.emitStudentSubject();
    }  
  }
  switchLate(){
    for(let student of this.students){
      student.status = 'late';
      this.emitStudentSubject();
    }  
  }

  switchOnOne(i: number) {
    this.students[i].status = 'present';
    this.emitStudentSubject();

  }

  switchOffOne(i: number) {
    this.students[i].status = 'absent';
    this.emitStudentSubject();

  }
  switchLateOne(i: number) {
    this.students[i].status = 'late';
    this.emitStudentSubject();

  }

  getStudentById(id: number) {
    const student = this.students.find(
    (s) =>{    
      return s.id === id;
    }
    );
    return student;
  }
  
  emitStudentSubject() {
    this.studentsSubject.next(this.students.slice());
  }
  

}
