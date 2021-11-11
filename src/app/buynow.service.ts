import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Buynow} from './buynow';

@Injectable({
  providedIn: 'root'
})
export class BuynowService {

  
  private baseURL = "http://localhost:9090/api";

  constructor(private httpClient: HttpClient) { }

  getBuynowList(): Observable<Buynow[]>{
    return this.httpClient.get<Buynow[]>(`${this.baseURL}`+'/buynow');
}


postBuynowList(): Observable<Buynow[]>{
  return this.httpClient.get<Buynow[]>(`${this.baseURL}`);
}
createBuyer(buynow: Buynow): Observable<Object>{                                       ///////student.service.ts
  return this.httpClient.post(`${this.baseURL}`+'/save-buynow', buynow);
}

getBuynowById(id: number): Observable<Buynow>{
  return this.httpClient.get<Buynow>(`${this.baseURL}`+'/buynow'+`/${id}`);
}

updatebuynow(id: number, buynow: Buynow): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}`+'/buynow'+`/${id}`, buynow);
}

deleteBuynow(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}`+'/buynow'+`/${id}`);
}

}