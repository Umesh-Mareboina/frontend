import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addbook } from '../addbook';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { AddbookService } from '../addbook.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  login: any;
addbooks:Addbook[];
 

  constructor(private router: Router,private user : UserService,private loginService: LoginService,private addbookService: AddbookService,) { }

  ngOnInit(): void {
    this.getorders();
  }
  private getorders(){
    this.addbookService.getaddbookList().subscribe(data => {
      this.addbooks = data;
    });
  }


    
  logout()
  {
    this.router.navigate(['/home']);
  }

  onbuynow(bookName: String)
  
   {
    //const user=this.user.registerUser;
    // const user=this.loginService.loginUser;
    
    // console.log();
    
      this.loginService.getUser(this.loginService.loginUser.emailId,this.loginService.loginUser.password).subscribe( data =>{
        const user=data;
        
        if(user?.firstName && user?.lastName)
    {
      const userName=user.firstName+' '+user.lastName;
      const emailId=user.emailId;
      
      this.router.navigate(['buynow'], 
      {
        queryParams: { bookName,userName,emailId }
       })

      }
        console.log(data);
    
      },
      error => {
        return console.log(error);
      });
  
    
    
    
   
    
  }

}

