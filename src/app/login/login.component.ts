import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  
  errors={ emailId:false};
  login: Login = new Login();
  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }
  back(){
    this.router.navigate(['home'])
  }
  
  save(){
    this.loginService.getUser(this.login.emailId,this.login.password).subscribe( data =>{
      console.log(data);
      this.loginService.loginUser=this.login;
      this.goToBooks();
    },
    error => {
      return console.log(error);
    });
  }

  goToBooks(){
    this.router.navigate(['/books']);
  }

  
  // onSubmit(){
  //   if(!this.errors.emailId && this.login.password)
  //   {
      
  //     console.log(this.login);
  //     this.saveLogin();
  //   }
  //   else{
  //     alert('Please Register..');
  //     this.router.navigate(['create-user'])
  //   }
  //   // console.log(this.student);
  //   // this.saveStudent();
  // }
  validateemailId(){
    
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.emailId = !pattern.test(this.login.emailId);
    console.log(this.errors.emailId);
  }
  onSubmit() {
       if(this.login.emailId && this.login.password)
    {
      console.log(this.login);
      
      this.save();

    }
    else{
      alert("You missed your data.....below fields are requied");
      
    }

  //   console.log('hi this is onsubmit')

  //   console.log(this.login.emailId);

  //   this.loginService.getLogin(this.login.emailId).subscribe((response) => {

  //     console.log(response)

  //     alert('You have registered sucessfully! Click ok to login...')



  //   this.goToBooks();

  // });

   }

  
}