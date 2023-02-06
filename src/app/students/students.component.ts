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

  @Input() studentName!: string;
  @Input() studentStatus!: string;


  getColor() {
    if(this.studentStatus === 'present') {
    return 'green';
    }else if(this.studentStatus === 'absent'){
    return 'red';
    }else if(this.studentStatus === 'late'){
    return 'orange';
    }else{
      return
    }
  }
  
  lastUpdate : Promise<Date> = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () =>{
        resolve(date);
      }, 3000
    );
  });
  
  getStatus(){
    return this.studentStatus;
  }

  
}
