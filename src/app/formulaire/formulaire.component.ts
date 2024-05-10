import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  formresidence!:FormGroup
  //var1!:string="test"

  ngOnInit(): void {
      this.formresidence=new FormGroup({
        id:new FormControl('',[Validators.required,Validators.pattern('^[1-9]*$')]),
        name:new FormControl('',[Validators.required,Validators.pattern('^[A-Z]{1}[a-zA-Z]*$')]),
        address:new FormControl('',[Validators.required,Validators.minLength(4),Validators.email]),

      })
  }

  get id(){return this.formresidence.get('id')}
add(){
  console.log(this.formresidence.value)
}

}
