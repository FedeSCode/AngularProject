import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentsComponent } from './students/students.component';




const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: ''},
  { path: 'students', component: StudentViewComponent},
  { path: 'auth', component: AuthComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
export const routedComponents = [StudentViewComponent, AuthComponent]



