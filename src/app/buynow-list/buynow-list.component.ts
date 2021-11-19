import { Component, OnInit } from '@angular/core';
import { Buynow } from '../buynow'
import { BuynowService } from '../buynow.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-buynow-list',
  templateUrl: './buynow-list.component.html',
  styleUrls: ['./buynow-list.component.css']
})
export class BuynowListComponent implements OnInit {
  


  buynows: Buynow[];
  

  constructor(private buynowService: BuynowService,
    private router: Router) { }

  ngOnInit(): void 
  {
   this.getorders();
  }
  private getorders(){
    this.buynowService.getBuynowList().subscribe(data => {
      this.buynows = data;
    });
  }

  buynowDetails(id: number){
    this.router.navigate(['buynow-details', id]);
  }
back()
{
  this.router.navigate(['admin-page']);
}
  updateBuynow(id: number){
    this.router.navigate(['update-buynow', id]);
  }

  deleteBuynow(id: number){
    this.buynowService.deleteBuynow(id).subscribe( data => {
      console.log(data);
      this.getorders();
    })
  
  }
}

