import { Component, OnInit } from '@angular/core';
import { AddbookService } from '../addbook.service';
import { Addbook } from '../addbook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-addbook',
  templateUrl: './update-addbook.component.html',
  styleUrls: ['./update-addbook.component.css']
})
export class UpdateAddbookComponent implements OnInit {
  id: number;
  addbook: Addbook= new Addbook();
  
  
  constructor(private addbookService: AddbookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
     this.addbookService.getaddbookById(this.id).subscribe(data => {
       this.addbook = data;
     }, error => console.log(error));
   }
   onSubmit(){
    this.addbookService.updateAddbook(this.id, this.addbook).subscribe( data =>{
      this.goToAddbookList();
    }
    , error => console.log(error));
  }

  
  goToAddbookList(){
    this.router.navigate(['/addbooklist']);
  }


}
