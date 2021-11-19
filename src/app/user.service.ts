import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  private baseURL = "http://localhost:9090/api";
 // registerUser=null;
 loginUser=null;
  constructor(private httpClient: HttpClient) { }
  
  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`+'/users');
}

postUsersList(): Observable<User[]>{
  return this.httpClient.get<User[]>(`${this.baseURL}`);
}
  createUser(user: User): Observable<Object>{                                       ///////user.service.ts
    return this.httpClient.post(`${this.baseURL}`+'/save-user', user);
  }

  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}`+'/users'+`/${id}`);
  }
  

  updateUser(id: number, user: User): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/users'+`/${id}`, user);
  }

  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'/users'+ `/${id}`);
  }
}