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
  // loginUser={emailId:null,password:null};
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

  getUser(email_id:any,password:any): Observable<any>{

    return this.httpClient.get<Login>(`${this.baseURL}`+'/loginUser'+`/${email_id}/${password}`);

  }
}