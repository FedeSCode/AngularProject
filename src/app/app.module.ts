import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentService } from './service/student.service';

import { FormsModule } from '@angular/forms';
import { StudentsComponent } from './students/students.component';
import { AuthService } from './service/auth.service';
import { NavComponent } from './nav/nav.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    routedComponents,
    NavComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
