import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { UpdateApartComponent } from './update-apart/update-apart.component';
import { AddappartmentComponent } from './addappartment/addappartment.component';
import { ShowappartComponent } from './showappart/showappart.component';
import { ManipulationComponent } from './manipulation/manipulation.component';
import { RimshowroomComponent } from './rimshowroom/rimshowroom.component';


const ROUTES:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"appartment",component:AppartmentComponent},
  {path:"addappart",component:AddappartmentComponent},
  {path:"Formulaire",component:FormulaireComponent},
  {path:"update/:id",component:UpdateApartComponent},
  {path:"show/:id",component:ShowappartComponent},
  {path:"manipulation",component:ManipulationComponent},
  {path:"showRoom",component:RimshowroomComponent},
  {path:"showRoom/:id",component:RimshowroomComponent}
  //{path:"**",component:NotfoundComponent}
 ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
