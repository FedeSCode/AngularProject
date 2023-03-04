import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})

export class EditStudentComponent {
  defaultStatus = 'absent';

constructor(private studentService: StudentService, private router: Router){

}



onSubmit(form: NgForm){
  console.log(form.value);
  const name = form.value['name'];
  const status = form.value['status'];
  this.studentService.addStudent(name,status);
  console.log("ici juste appres add dans edit");
  this.router.navigate(['students']);
}



}
