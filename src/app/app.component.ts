import { Component, OnInit } from '@angular/core';
import { StudentService } from './service/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title= "Angular Project"
  isAuth = false;
  student: any;
  
  constructor(){
  }
  
  ngOnInit() {
  }

  lastUpdate = new Date();
}

