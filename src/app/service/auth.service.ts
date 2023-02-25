import { Injectable } from '@angular/core';
import{Router, RouterModule} from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
isAuth = false;

constructor(){
  /*this.router.navigate(['students']);*/
}


static signIn() {
  throw new Error('Method not implemented.');
}
static signOut() {
  throw new Error('Method not implemented.');
}

signIn() {
  return new Promise(
    (resolve, reject) =>{
      setTimeout( () =>{
        this.isAuth = true;
        resolve(true);
      },1000
      );
    }
  );
}

signOut() {
  this.isAuth = false;
  console.log(this.isAuth);
}



}
