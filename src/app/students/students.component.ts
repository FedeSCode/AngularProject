import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{
  constructor(){
    
  }
  ngOnInit() {
    
  }
  
  studentName = 'Henrik';
  studentStatus = 'present';
  
  getStatus(){
    return this.studentStatus;
  }
  
}
