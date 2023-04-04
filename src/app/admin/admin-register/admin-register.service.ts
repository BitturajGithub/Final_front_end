import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/admin.model';



@Injectable({
  providedIn: 'root',
})
export class AdminRegisterService  {
  private baseUrl: string = 'http://localhost:8000/admin'
  constructor(private http: HttpClient) {}
  postRegistration(registerObj: Admin){
    return this.http.post<Admin>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredUser(){
    return this.http.get<Admin[]>(`${this.baseUrl}`)
  }
  updateRegisterUser(registerObj:AdminRegisterService,id:number){
    return this.http.put<Admin>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegistered(id:number){
    return this.http.delete<Admin>(`${this.baseUrl}/${id}`)

  }
  getRegisteredUserId(id:number){
    return this.http.get<Admin>(`${this.baseUrl}/${id}`)
  }
}