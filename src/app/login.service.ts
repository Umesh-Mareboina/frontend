import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Login} from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private baseURL = "http://localhost:9090/api";
  //registerLogin=null;
  loginUser=null;
  constructor(private httpClient: HttpClient) { }
  
  getLoginsList(): Observable<Login[]>{
    return this.httpClient.get<Login[]>(`${this.baseURL}`+'/logins');
}

postLoginsList(): Observable<Login[]>{
  return this.httpClient.get<Login[]>(`${this.baseURL}`);
}
  createLogin(user: Login): Observable<Object>{                                       
    return this.httpClient.post(`${this.baseURL}`+'/save-login', user);
  }

  getLoginById(id: number): Observable<Login>{
    return this.httpClient.get<Login>(`${this.baseURL}`+'/logins'+`/${id}`);
  }

  getLogin(email_id: any): Observable<Login>{

    return this.httpClient.get<Login>(`${this.baseURL}`+'/email'+`/${email_id}`);

  }
}