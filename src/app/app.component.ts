import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProjet';
  isAuth = false;
  
  studentOne= "Henry";
  studentTwo ="Tony";
  studentThree ="Lina";

  studentStatus = "Present/Absent/Late";

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      },4000
    );
  }

  allPresent(){
    alert("ils sont tous là!");
  }

  

  
}
