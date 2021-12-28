import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers : [UserService]
})
export class CreateUserComponent implements OnInit {

  
  errors={ emailId:false};
  
  user: User = {
    firstName: '',
    lastName: '',
    gender: '',
    emailId: '',
    password: '',
    id: 0
  };

  constructor(private userService: UserService,private fb: FormBuilder,
    private router: Router) { }
    reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.minLength(5)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(5)]),
      gender: new FormControl('', [Validators.required,Validators.minLength(4)]),
      emailId: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@gmail+\.[a-z]{2,4}$')]),
      password: new FormControl('', [Validators.required,Validators.pattern('(?=.*[A-Z]).{8,}')])
    })
  }
  back(){
    this.router.navigate(['login'])
  }
  
 

  goToLogin(){
    this.router.navigate(['/login']);
  }

  saveUser(){
    this.userService.createUser(this.reactiveForm.value).subscribe( data =>{
      console.log(data);
     // this.userService.registerUser=this.user;
      this.goToLogin();
    },
    error => {
      return console.log(error);
    });
  }
  

    onSubmit() {
   
  
      if(this.reactiveForm.value.firstName&& this.reactiveForm.value.lastName&& this.reactiveForm.value.gender&& this.reactiveForm.value.emailId  && this.reactiveForm.value.password) {
        {
          this.saveUser();
          alert(' Successfully Registered..!!')
        this. goToLogin();
     } 
    // console.log(this.student);
    // this.saveStudent();
  }
}



  validateemailId(){
    
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.emailId = !pattern.test(this.user.emailId);
    console.log(this.errors.emailId);
  }
 

}