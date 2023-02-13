import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  static signIn() {
    throw new Error('Method not implemented.');
  }
  static signOut() {
    throw new Error('Method not implemented.');
  }
  isAuth = false;
  static isAuth: any;
  

  signIn() {
    return new Promise(
      (resolve, reject) =>{
        setTimeout( () =>{
          this.isAuth = true;
          resolve(true);
        }, 3000
        );
      }
    );
  }




signOut() {
  this.isAuth = false;
}



}
