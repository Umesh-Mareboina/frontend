import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  
  errors={ emailId:false};
  err={ password:false};
  user: User = new User();
  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  
  saveUser(){
    this.userService.createUser(this.user).subscribe( data =>{
      console.log(data);
     // this.userService.registerUser=this.user;
      this.goToLogin();
    },
    error => {
      return console.log(error);
    });
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
  
  onSubmit(){

 if(this.user.firstName && this.user.lastName && this.user.gender && !this.errors.emailId && !this.err.password )
    {
      console.log(this.user);
      this.saveUser();
    }
    else{
      alert("You missed your data.....below fields are requied");
    }
    // console.log(this.student);
    // this.saveStudent();
  }


  validateemailId(){
    
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.emailId = !pattern.test(this.user.emailId);
    console.log(this.errors.emailId);
  }
  validatepassword(){
    
    const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/ ;
    
     this.err.password = !pattern.test(this.user.password);

    if(!this.err.password)
    {
    this.err.password=this.user.password !== this.user.confirmPassword;
    }
     console.log(this.err.password);

  }

}
