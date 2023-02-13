import { Component} from '@angular/core';
import { StudentService } from '../service/student.service';

@Component({
selector: 'app-student-view',
templateUrl: './student-view.component.html',
styleUrls: ['./student-view.component.scss']
})

export class StudentViewComponent {
isAuth= true;
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
    return; 
  }
}

allLate(){
  if(confirm('Etes vous sûr qu \\’ils sont tous en retard ?')){
    this.studentService.switchLate();
  }else {
    return ; 
  }
}






}
