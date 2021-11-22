import { Component, OnInit } from '@angular/core';
import { Addbook } from '../addbook'
import { AddbookService } from '../addbook.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook-list',
  templateUrl: './addbook-list.component.html',
  styleUrls: ['./addbook-list.component.css']
})
export class AddbookListComponent implements OnInit {
  


  addbooks: Addbook[];
  

  constructor(private addbookService: AddbookService,
    private router: Router) { }

  ngOnInit(): void 
  {
   this.getorders();
  }
  private getorders(){
    this.addbookService.getaddbookList().subscribe(data => {
      this.addbooks = data;
    });
  }

  addbookDetails(id: number){
    this.router.navigate(['addbook-details', id]);
  }
back()
{
  this.router.navigate(['admin-page']);
}
  updateAddbook(id: number){
    this.router.navigate(['update-addbook', id]);
  }

  deleteAddbook(id: number){
    this.addbookService.deleteAddbook(id).subscribe( data => {
      console.log(data);
      this.getorders();
    })
  
  }
}