import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = "http://localhost:9090/api";
  registerStudent=null;
  constructor(private httpClient: HttpClient) { }
  
  getStudentsList(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`+'/students');
}

postStudentsList(): Observable<Student[]>{
  return this.httpClient.get<Student[]>(`${this.baseURL}`);
}
  createStudent(student: Student): Observable<Object>{                                       ///////student.service.ts
    return this.httpClient.post(`${this.baseURL}`+'/save-student', student);
  }

  getStudentById(id: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}`+'/students'+`/${id}`);
  }
  

  updateStudent(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}`+'/students'+`/${id}`, student);
  }

  deleteStudent(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}`+'/students'+ `/${id}`);
  }
}