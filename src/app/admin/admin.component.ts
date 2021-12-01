import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  errors={ emailId:false};
  err={ password:false};
  admin: Admin = new Admin();
  alert:boolean=false;
  constructor(private adminService: AdminService,
    private router: Router) { }

  ngOnInit(): void {
  }

back(){
  this.router.navigate(['home'])
}

  saveAdmin(){
    this.adminService.admin(this.admin).subscribe( data =>{
      console.log(data);
      this.adminService.Admin=this.admin;
      this.goToAdminPage();
    },
    error => {
      return console.log(error);
    });
  }

  goToAdminPage(){

    this.router.navigate(['/admin-page']);

  }

  onSubmit():void{

    if (this.admin.emailId == 'abc@booksworld.com' && this.admin.password=='1234567')
{
  this.alert=true;
     
}
  else
  {
  alert(" * Fields are Required")
}

    };
    closeAlert(){
      this.goToAdminPage();
    }
  validateemailId(){
    
    const pattern = /^[a-z0-9._%+-]+@booksworld.com$/ ;

     this.errors.emailId = !pattern.test(this.admin.emailId);
    console.log(this.errors.emailId);
  }
  validatepassword(){
    
    const pattern = /1234567/ ;
    
     this.err.password = !pattern.test(this.admin.password);
    console.log(this.err.password);
  }
 
  
}

