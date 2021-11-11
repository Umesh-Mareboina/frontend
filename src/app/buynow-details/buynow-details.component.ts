import { Component, OnInit } from '@angular/core';
import { Buynow } from '../buynow';
import { ActivatedRoute } from '@angular/router';
import { BuynowService } from '../buynow.service';

@Component({
  selector: 'app-buynow-details',
  templateUrl: './buynow-details.component.html',
  styleUrls: ['./buynow-details.component.css']
})
export class BuynowDetailsComponent implements OnInit {

  id: number
  buynow: Buynow
  route: any;
  constructor(privateroute: ActivatedRoute, private buynowService: BuynowService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
        this.buynow = new Buynow();
        this.buynowService.getBuynowById(this.id).subscribe( data => {
          this.buynow = data;
        });
  }
  
}

