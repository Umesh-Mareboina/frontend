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
  
  getAdminsList(): Observable<Admin[]>{
    return this.httpClient.get<Admin[]>(`${this.baseURL}`+'/admins');
}

postAdminsList(): Observable<Admin[]>{
  return this.httpClient.get<Admin[]>(`${this.baseURL}`);
}
  admin(admin: Admin): Observable<Object>{                                      
    return this.httpClient.post(`${this.baseURL}`+'/save-admin', Admin);
  }

  getAdminById(id: number): Observable<Admin>{
    return this.httpClient.get<Admin>(`${this.baseURL}`+'/admins'+`/${id}`);
  }
}