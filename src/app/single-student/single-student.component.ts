import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {StudentService} from '../service/student.service';

@Component({
  selector: 'app-single-student',
  templateUrl: './single-student.component.html',
  styleUrls: ['./single-student.component.scss']
})

export class SingleStudentComponent implements OnInit {
  name: string | undefined;
  status: string | undefined;
  route: any;
  
  constructor(private studentService : StudentService, route: ActivatedRoute){
  
  }
  
  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    /*this.name = this.studentService.getStudentById(+id).name;
    this.status = this.studentService.getStudentById(+id).status;*/
    
  }

}
