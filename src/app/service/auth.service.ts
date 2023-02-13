import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isAuth = false;

  /*static signIn() {
    throw new Error('Method not implemented.');
  }
  static signOut() {
    throw new Error('Method not implemented.');
  }*/
 
  signIn() {
    return new Promise(
      (resolve, reject) =>{
        setTimeout( () =>{
          this.isAuth = true;
          resolve(true);
        },10
        );
      }
    );
  }




signOut() {
  this.isAuth = false;
}



}
