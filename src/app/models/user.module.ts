import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email:string,
    public diploma: string,
    public options: any[]
  ){}


}
 