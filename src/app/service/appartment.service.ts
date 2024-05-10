import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/apartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppartmentService {
baseUrl='http://localhost:3000/appartement'
  constructor(private http:HttpClient) { }


  getnumber(list:any,creteria:string,value:any){
    //console.log("Bonjour 4artic6")

    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
return n

  }


getappart():Observable<Apartment[]>{
  return this.http.get<Apartment[]>(this.baseUrl)

}

addapart(appart:Apartment):Observable<Apartment[]>{
  return this.http.post<Apartment[]>(this.baseUrl,appart)

}

deleteappart(id:any):Observable<Apartment[]>{
  return this.http.delete<Apartment[]>(this.baseUrl+'/'+id)

}
updateappart(id:any,appart:Apartment):Observable<Apartment[]>{
  return this.http.put<Apartment[]>(this.baseUrl +'/'+id,appart)

}

getbyidappart(id:any):Observable<Apartment[]>{
  return this.http.get<Apartment[]>(this.baseUrl+'/'+id)

}


}
