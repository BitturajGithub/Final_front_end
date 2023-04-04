import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Leave_model } from 'src/app/models/Leave.model';


@Injectable({
  providedIn: 'root'
})

export class ShowLeaveService {
  private baseUrl: string = 'http://localhost:7000/leave'
  constructor(private http: HttpClient) {}
  postRegistration(registerObj: Leave_model){
    return this.http.post<Leave_model>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredUser(){
    return this.http.get<Leave_model[]>(`${this.baseUrl}`)
  }
  updateRegisterUser(registerObj:ShowLeaveService,id:number){
    return this.http.put<Leave_model>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegistered(id:number){
    return this.http.delete<Leave_model>(`${this.baseUrl}/${id}`)

  }
  getRegisteredUserId(id:number){
    return this.http.get<Leave_model>(`${this.baseUrl}/${id}`)
  }
}