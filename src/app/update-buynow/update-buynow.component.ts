import { Component, OnInit } from '@angular/core';
import { BuynowService } from '../buynow.service';
import { Buynow } from '../buynow';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-buynow',
  templateUrl: './update-buynow.component.html',
  styleUrls: ['./update-buynow.component.css']
})
export class UpdateBuynowComponent implements OnInit {
  id: number;
  buynow: Buynow= new Buynow();
  
  errors={ emailId:false};
  constructor(private buynowService: BuynowService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
     this.buynowService.getBuynowById(this.id).subscribe(data => {
       this.buynow = data;
     }, error => console.log(error));
   }
   onSubmit(){
    this.buynowService.updatebuynow(this.id, this.buynow).subscribe( data =>{
      this.goToBuynowList();
    }
    , error => console.log(error));
  }
  
  goToBuynowList(){
    this.router.navigate(['/buynowlist']);
  }
  validateemailId(){
    
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ ;

     this.errors.emailId = !pattern.test(this.buynow.emailId);
    console.log(this.errors.emailId);
  }

}

