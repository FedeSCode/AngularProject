import { StudentService } from './service/student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProjet';
  isAuth = false;
  students : any;
  


  constructor(private studentService: StudentService ){
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }

  ngOnInit() {
    this.students=  this.studentService.students ;
  }
  
  allPresent(){
    if(confirm('Etes vous sûr qu \\’ils sont tous presents ?')){
      this.studentService.switchOnAll();
    }else {
      return ; 
    }
  }

  allAbsent(){
    if(confirm('Etes vous sûr qu \\’ils sont tous absents ?')){
      this.studentService.switchOffAll();
    }else {
      return ; 
    }
  }
  
  allLate(){
    if(confirm('Etes vous sûr qu \\’ils sont tous en retard ?')){
      this.studentService.switchLate();
    }else {
      return ; 
    }
  }

  lastUpdate = new Date();

  

  
  

  
}
