import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routedComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { StudentService } from './service/student.service';

import { FormsModule } from '@angular/forms';
import { StudentViewComponent } from './student-view/student-view.component';

@NgModule({
  declarations: [
    routedComponents,
    StudentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
