import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../models/residence';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-update-apart',
  templateUrl: './update-apart.component.html',
  styleUrls: ['./update-apart.component.css']
})
export class UpdateApartComponent implements OnInit {

  id!:number
  formreappart!:FormGroup

  residence:Residence ={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  }
constructor(
  private act : ActivatedRoute,
  private appartService : AppartmentService,
  private route:Router
){
}
listappart:Apartment[]=[]

ngOnInit(){
    this.id = this.act.snapshot.params['id']

    this.formreappart = new FormGroup({
      appartNum:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      residence:new FormControl(this.residence,Validators.required),
    })

    this.appartService.getbyidappart(this.id).subscribe((data)=>{
this.listappart=data

this.formreappart.patchValue(this.listappart as any)
    })

}

update(){

  this.appartService.updateappart(this.id,this.formreappart.value)
  .subscribe(()=>{
    console.log('update')
    this.route.navigate(['/appartment'])
  })


}
}
