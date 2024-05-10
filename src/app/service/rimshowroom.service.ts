import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { rimShowroomModel } from '../models/rimShowroomModel';

@Injectable({
  providedIn: 'root'
})
export class RimshowroomService {
  baseUrl = 'http://localhost:3000/showrooms'; 

  constructor(private http: HttpClient) { }

  getNumber(list: any, creteria: string, value: any): number {
    let n = 0;
    for (let i in list) {
      if (list[i][creteria] == value) {
        n++;
      }
    }
    return n;
  }

  getShowrooms(): Observable<rimShowroomModel[]> {
    return this.http.get<rimShowroomModel[]>(this.baseUrl);
  }

  addShowroom(showroom: rimShowroomModel): Observable<rimShowroomModel[]> {
    return this.http.post<rimShowroomModel[]>(this.baseUrl, showroom);
  }

  deleteShowroom(id: any): Observable<rimShowroomModel[]> {
    return this.http.delete<rimShowroomModel[]>(this.baseUrl + '/' + id);
  }

  updateShowroom(id: any, rimShowroomModel: rimShowroomModel): Observable<rimShowroomModel[]> {
    return this.http.put<rimShowroomModel[]>(this.baseUrl + '/' + id, rimShowroomModel);
  }

  getShowroomById(id: any): Observable<rimShowroomModel[]> {
    return this.http.get<rimShowroomModel[]>(this.baseUrl + '/' + id);
  }
}
