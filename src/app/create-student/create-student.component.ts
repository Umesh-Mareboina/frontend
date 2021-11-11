import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  
  errors={ emailId:false};
  student: Student = new Student();
  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  
  saveStudent(){
    this.studentService.createStudent(this.student).subscribe( data =>{
      console.log(data);
      this.studentService.registerStudent=this.student;
      this.goToBooks();
    },
    error => {
      return console.log(error);
    });
  }

  goToBooks(){
    this.router.navigate(['/books']);
  }
  
  onSubmit(){
    if(this.student.firstName && this.student.lastName && this.student.gender && !this.errors.emailId)
    {
      console.log(this.student);
      this.saveStudent();
    }
    else{
      alert("You missed your data.....below fields are requied");
    }
    // console.log(this.student);
    // this.saveStudent();
  }
  validateemailId(){
    
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.emailId = !pattern.test(this.student.emailId);
    console.log(this.errors.emailId);
  }

  
}




