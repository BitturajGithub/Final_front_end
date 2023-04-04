import { Emp_model } from './../../models/employee.model';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class ShowEmpService  {
  private baseUrl: string = 'http://localhost:7000/employee'
  constructor(private http: HttpClient) {}
  postRegistration(registerObj: Emp_model){
    return this.http.post<Emp_model>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredUser(){
    return this.http.get<Emp_model[]>(`${this.baseUrl}`)
  }
  updateRegisterUser(registerObj:ShowEmpService,id:number){
    return this.http.put<Emp_model>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegistered(id:number){
    return this.http.delete<Emp_model>(`${this.baseUrl}/${id}`)

  }
  getRegisteredUserId(id:number){
    return this.http.get<Emp_model>(`${this.baseUrl}/${id}`)
  }
}