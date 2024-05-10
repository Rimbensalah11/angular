import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppartmentService } from '../service/appartment.service';
import { Apartment } from '../models/apartment';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit {
 variable1:String="hello 4 arctic 6"
@Input()
var2:String=""

listappart:Apartment[]=[]
  constructor(private appartmetservice:AppartmentService){

  }
  ngOnInit(): void {
      this.appartmetservice.getappart().subscribe((data:Apartment[])=>{
this.listappart=data
console.log(JSON.stringify(this.listappart))
      })
  }
  deleteAppart(id:number){
    this.appartmetservice.deleteappart(id).subscribe(()=>{
      console.log(" deleted")
      window.location.reload()
    })
  }

  update(){
  
  }
  @Output() valueEvent= new EventEmitter<string>()
  add(value:string){
    console.log(value)
    this.valueEvent.emit(value)
  }
}
