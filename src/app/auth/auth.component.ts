import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {
  authStatus!: boolean;

  
  constructor(private authService : AuthService, private router: Router,){

  }

  ngOnInit(){
    this.authStatus = this.authService.isAuth;
  }


  onSignIn() {
    this.authService.signIn().then(
      () =>{
        alert('Sign in successful!');
        this.router.navigate(['students']);
        this.authStatus = this.authService.isAuth;
      }
    );
  }
    
  onSignOut() {

    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
