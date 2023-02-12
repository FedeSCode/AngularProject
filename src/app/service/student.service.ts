import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

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



}
