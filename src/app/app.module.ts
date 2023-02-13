import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentService } from './service/student.service';

import { FormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    routedComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
