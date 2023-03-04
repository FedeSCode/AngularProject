import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.module';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  constructor(private user: User, private userService: UserService){
  }
  
  OnInit(){}


  OnDestroy(){
  }

}
