import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers : [AdminService]
})
export class AdminComponent implements OnInit {

  errors={ emailId:false}
  admin: Admin = {emailId:'',password:''};
 
  constructor(private adminService: AdminService,
    private router: Router,private fb: FormBuilder) { }
    reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      emailId: new FormControl('', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@booksworld.com')]),
      password: new FormControl('', [Validators.required,Validators.minLength(7)])
    })
  }

  back(){
    this.router.navigate(['home'])
  }
  

  // validateemailId(){

  //   const pattern = /^[a-z0-9._%+-]+@booksworld.com/ ;

  //    this.reactiveForm.value.emailId = !pattern.test(this.reactiveForm.value.emailId);
  //   console.log(this.reactiveForm.value.emailId);
  // }

  goToAdminPage(){

    this.router.navigate(['/admin-page']);

  }

  onSubmit():void{

    if(this.reactiveForm.value.emailId === 'abc@booksworld.com' && this.reactiveForm.value.password ==='1234567') {
      alert('Welcome Admin! Successfully Logined...')
      this. goToAdminPage();
   } 
  
  
  
}

}