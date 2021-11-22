import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Addbook} from './addbook';

@Injectable({
  providedIn: 'root'
})
export class AddbookService{
  deleteaddbook(id: number) {
    throw new Error('Method not implemented.');
  }
 
  
  private baseURL = "http://localhost:9090/api";
 
  constructor(private httpClient: HttpClient) { }
  
  getaddbookList(): Observable<Addbook[]>{
    return this.httpClient.get<Addbook[]>(`${this.baseURL}`+'/addbook');
}

postaddbookList(): Observable<Addbook[]>{
  return this.httpClient.get<Addbook[]>(`${this.baseURL}`);
}
  createaddbook(addbook: Addbook): Observable<Object>{                                       
    return this.httpClient.post(`${this.baseURL}`+'/save-addbook', addbook);
  }

  getaddbookById(id: number): Observable<Addbook>{
    return this.httpClient.get<Addbook>(`${this.baseURL}`+'/addbook'+`/${id}`);
  }

  updateAddbook(id: number, addbook: Addbook): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/addbook'+`/${id}`, addbook);
  }
  
  deleteAddbook(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'/addbook'+ `/${id}`);
  }

}