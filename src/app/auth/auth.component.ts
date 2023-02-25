import { Component , OnInit} from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  /*authStatus: boolean | any;

  
  constructor(private authService : AuthService){
    
  }

  ngOnInit(){
    this.authStatus = this.authService.isAuth;
    
  }


  onSignIn() {
    this.authService.signIn().then(
      () =>{
        alert('Sign in successful!');
        this.authStatus = this.authService.isAuth;
      }
    );
  }
    
  
  onSignOut() {

    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }*/

}
