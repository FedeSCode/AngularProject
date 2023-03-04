import { Injectable } from '@angular/core';
import { User } from '../models/user.module';
import {Subject} from "rxjs"


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users!: User[];

  constructor(private user: User) {

  }
  userSubject =  new Subject<User[]>();


  emitUsers(){
    this.userSubject.next(this.users.slice())
  }

  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }


}
