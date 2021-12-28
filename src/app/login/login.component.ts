import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent implements OnInit {

  
  errors={ emailId:false};
  login: Login = {emailId:'',password:''};
 
  
  constructor(private loginService: LoginService,private fb: FormBuilder,
    private router: Router) { }
    reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      emailId: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@gmail+\.[a-z]{3,4}$')]),
      password: new FormControl('', [Validators.required,Validators.minLength(7)])
    })
  }
  back(){
    this.router.navigate(['home'])
  }

  goToBooks(){
    this.router.navigate(['/books']);
  }
  
  save(){
    this.loginService.getUser(this.reactiveForm.value.emailId , this.reactiveForm.value.password).subscribe( data =>{
      // console.log(data);
      this.loginService.loginUser=this.reactiveForm.value;
  
      console.log(this.loginService.loginUser);
      this.goToBooks();
    },
    error => {
      return console.log(error);
    });
  }

  onSubmit() {
   
  
  //   if(this.reactiveForm.value.emailId  && this.reactiveForm.value.password) {
  //     this.loginService.loginUser ={emailId:this.reactiveForm.value.emailId,password:this.reactiveForm.value.password};
  //     console.log(this.loginService.loginUser);
  //     alert('Welcome! Successfully Logined..')
  //     this. goToBooks();
  //  } 

   if(this.reactiveForm.value.emailId && this.reactiveForm.value.password)
   {
   
     console.log(this.reactiveForm.value);
     
     this.save();
  //   console.log('hi this is onsubmit')

  //   console.log(this.login.emailId);

  //   this.loginService.getLogin(this.login.emailId).subscribe((response) => {

  //     console.log(response)

  //     alert('You have registered sucessfully! Click ok to login...')



  //   this.goToBooks();

  // });

   }
  }
}