import {Component, OnInit , Input} from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})

export class StudentsComponent implements OnInit{
  isAuth = false;
  students : any;

  constructor(private studentService: StudentService) { 
    setTimeout(
      () =>{
        this.isAuth = true;
      }, 4000
    );

  }

  ngOnInit() {}

  @Input() index!: number ;
  @Input() studentName!: string ;
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


  onSwitch() {
    if(this.studentStatus === 'present') {
    this.studentService.switchOffOne(this.index);
    } else if(this.studentStatus === 'absent')
    this.studentService.switchOnOne(this.index);
  }
  
  getStatus(){
    return this.studentStatus;
  }

  

  
}
