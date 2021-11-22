import { Component, OnInit } from '@angular/core';
import { Addbook } from '../addbook';
import { AddbookService } from '../addbook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

addbook : Addbook=new Addbook(); 
  constructor(private AddbookService: AddbookService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveAddbook(){
    this.AddbookService.createaddbook(this.addbook).subscribe( data =>{
      console.log(data);
     // this.userService.registerUser=this.user;
      this.goToAddbookList();
    },
    error => {
      return console.log(error);
    });
  }

  goToAddbookList(){
    this.router.navigate(['/addbooklist']);
  }

  back()
{
  this.router.navigate(['admin-page']);
}
  
  onSubmit(){

 if(this.addbook.image && this.addbook.bookName && this.addbook.price && this.addbook.description)
    {
      console.log(this.addbook);
      this.saveAddbook();
    }
    else{
      alert("You missed your data.....below fields are requied");
    }
    // console.log(this.student);
    // this.saveStudent();
  }
}
