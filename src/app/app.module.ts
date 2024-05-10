import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ResidenceComponent } from './residence/residence.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app.routing.module';
import { AnnonceModule } from './annonce/annonce.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import{HttpClientModule} from '@angular/common/http';
import { AppartmentComponent } from './appartment/appartment.component';
import { UpdateApartComponent } from './update-apart/update-apart.component';
import { AddappartmentComponent } from './addappartment/addappartment.component';
import { ShowappartComponent } from './showappart/showappart.component';
import { ManipulationComponent } from './manipulation/manipulation.component';
import { RimshowroomComponent } from './rimshowroom/rimshowroom.component'; 
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    HomeComponent,
    NotfoundComponent,
    FormulaireComponent,
    AppartmentComponent,
    UpdateApartComponent,
    AddappartmentComponent,
    ShowappartComponent,
    ManipulationComponent,
    RimshowroomComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,   
    AppRoutingModule,
     AnnonceModule,
     ReactiveFormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
