import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppartmentService } from '../service/appartment.service';
import { Router } from '@angular/router';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-addappartment',
  templateUrl: './addappartment.component.html',
  styleUrls: ['./addappartment.component.css']
})
export class AddappartmentComponent implements OnInit {
  formreappart!:FormGroup
residence:Residence ={
  "id": 1,
  "name": "El fel",
  "address": "Borj Cedria",
  "image": "../../assets/images/residence1.jpg"
}
constructor(
private appartService : AppartmentService,
private route:Router
){
}

ngOnInit(): void {
  this.formreappart = new FormGroup({
    appartNum:new FormControl('',Validators.required),
    description:new FormControl('',Validators.required),
    residence:new FormControl(this.residence,Validators.required),
  })
}
add(){
  this.appartService.addapart(this.formreappart.value).subscribe(()=>{
    console.log('added')
    this.route.navigate(['/appartment'])
  })
}

}
