import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  login: any;


  constructor(private router: Router,private user : UserService,private loginService: LoginService) { }

  ngOnInit(): void {
  }


  books = [

    { 'id': 1, 'name': 'SHADOW OF MAN', 'description': "This book in order to convey her knowledge of a species of animal she loves very much.the scientist who first studied the chimpanzee in his natural habitat.", 'image': '../../assets/m8.jpg' },
    { 'id': 2, 'name': 'MOLLY', 'description': "Molly's job is to stay hidden in C.J.'s room, dog cuddle up to her at night, and protect her from bad people.A dog with a pure heart.it protect her for love and care from bad people.", 'image': '../../assets/mo7.jpg' },
    { 'id': 3, 'name': 'Remember Me', 'description': "In 1937, Los Niños de Morelia—were relocated via ship to Mexico to escape the war’s violence.there are two children went mexico. written by American author Christopher Pike.", 'image': '../../assets/re1.jpg' },
    { 'id': 4, 'name': 'Arabian Nights', 'description': "Aladdin is a poor yet street urchin in an Arabian city. One day he meets Princess Jasmine, the daughter of the Sultan of the land, and falls madly in love.", 'image': '../../assets/a1.jpeg' },
    { 'id': 5, 'name': 'Best Friend', 'description': "He needs a best friend at this hour of life as he lost his wife who was his best friend.A wife as a best friend.A true love story.", 'image': '../../assets/b1.jpeg' },
    { 'id': 6, 'name': 'The Girl', 'description': "The troubled woman begins her own investigation,while police arrests suspect Rachel may have crossed a dangerous line.", 'image': '../../assets/t1.jpg' },
    { 'id': 7, 'name': 'Scary Stories', 'description': "On Halloween 1968,The Jangly Man kills Turner by breaking his neck before attempting to kill Ramón.death of a jangly man.", 'image': '../../assets/sc1.jpg' },
    { 'id': 8, 'name': 'Death story', 'description': "Death is a taboo in most societies in the world. But what if we have got this completely wrong?", 'image': '../../assets/de2.png' }
  ]
    
  logout()
  {
    this.router.navigate(['/home']);
  }

  onbuynow(bookName: String)
  
   {
    //const user=this.user.registerUser;
    const user=this.loginService.loginUser;
console.log(user);

    if(user?.firstName && user?.lastName)
    {
      const userName=user.firstName+' '+user.lastName;
      const emailId=user.emailId;
      
      this.router.navigate(['buynow'], 
      {
        queryParams: { bookName,userName,emailId }
       })
    }
    else{
      alert("please login")
      this.router.navigate(['/login'])
    }
    
  }

}

