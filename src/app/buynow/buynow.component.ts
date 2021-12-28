import { Component, OnInit } from '@angular/core';
import { Buynow } from '../buynow';
import { BuynowService } from '../buynow.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buynow',
  templateUrl: './buynow.component.html',
  styleUrls: ['./buynow.component.css']
})
export class BuynowComponent implements OnInit {
  
  errors={ emailId:false};
  Buynow: Buynow = new Buynow();

  constructor(private buynowService: BuynowService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
  // this.Buynow.bookName='umesh'
  console.log(this.activatedRoute);
  this.activatedRoute.queryParams.subscribe((data)=>{                     ////queryparams
    this.Buynow.bookName=data.bookName;
    this.Buynow.userName=data.userName;
    this.Buynow.emailId=data.emailId;
    this.Buynow.price=data.price;
  })
  }
  
  saveBuynow() {
    this.buynowService.createBuyer(this.Buynow).subscribe( data =>{
      console.log(data);
      this.goToBooks();
    },
    error => {
      return console.log(error);
    });
  }
  goToBooks() {
    this.router.navigate(['/books']);
  }

  back()
  {
    this.router.navigate(['/books']);
  }


  onSubmit(){
    
    if(this.Buynow.phoneNumber && this.Buynow.address && this.Buynow.state && this.Buynow.city && this.Buynow.zipCode ) 
    {
      console.log(this.Buynow);
      this.saveBuynow();
    }
    else{
      alert("You missed your data.....below feilds are requied");
    }
      // console.log(this.Buynow);
      // this.saveBuynow();
    
  }
    // console.log(this.student);
    // this.saveStudent();
    validateemailId(){
    
      const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;
  
       this.errors.emailId = !pattern.test(this.Buynow.emailId);
      console.log(this.errors.emailId);
    }
  }
  