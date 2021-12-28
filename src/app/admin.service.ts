import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Admin} from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  private baseURL = "http://localhost:9090/api";
  Admin=null;
  constructor(private httpClient: HttpClient) { }
  
  admin(admin: Admin): Observable<Object>{                                      
    return this.httpClient.post(`${this.baseURL}`, Admin);
  }


}