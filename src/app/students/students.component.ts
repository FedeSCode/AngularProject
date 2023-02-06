import {Component, Input,  OnInit } from '@angular/core';

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

  @Input() studentName: string ="";
  
  @Input() studentStatus: string = "";

  
  
  /*getStatus(){
    return this.studentStatus;
  }*/

  
}
