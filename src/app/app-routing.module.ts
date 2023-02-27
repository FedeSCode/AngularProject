import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './home/home.component';
import { SingleStudentComponent } from './single-student/single-student.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { AuthGuardService } from './service/auth-guard.service'; 
 
const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  /*{ path: 'students', component: StudentViewComponent },
  { path: 'students/:id', component: SingleStudentComponent},*/
  { path: 'students', canActivate: [AuthGuardService], component: StudentViewComponent},
  { path: 'students/:id', canActivate: [AuthGuardService], component: SingleStudentComponent },
  { path: 'edit', canActivate:[AuthGuardService], component: EditStudentComponent},
  
  { path: 'auth', component: AuthComponent },
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}


export const routedComponents = [StudentViewComponent, AuthComponent];


