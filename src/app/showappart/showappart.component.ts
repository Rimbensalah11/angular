import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-showappart',
  templateUrl: './showappart.component.html',
  styleUrls: ['./showappart.component.css']
})
export class ShowappartComponent implements OnInit {
id!:number
  constructor(
    private act : ActivatedRoute,
    private appartService : AppartmentService,
    private route:Router
  ){
  }
  listappart:Apartment[]=[]

  ngOnInit(): void {
this.id=this.act.snapshot.params['id']
    this.appartService.getbyidappart(this.id).subscribe((data:Apartment[])=>{
      this.listappart.push(data as any)
      console.log('++++++++++++'+JSON.stringify(this.listappart))
      
          })
      
  }

}
