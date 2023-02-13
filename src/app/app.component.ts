import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title= "Angular Project"
  isAuth = false;
  students : any;


  
  
  constructor(  ){

  }
    
  ngOnInit() {
  }

  lastUpdate = new Date();

  

}
