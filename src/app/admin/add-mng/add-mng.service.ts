
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mng_model} from 'src/app/models/manager.model';


@Injectable({
  providedIn: 'root',
})
export class AddMngService  {
  // private baseUrl: string = 'http://localhost:8000/manager'
  private baseUrl: string = 'http://localhost:9000/manager'
  constructor(private http: HttpClient) {}
  postRegistration(registerObj: Mng_model){
    return this.http.post<Mng_model>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredUser(){
    return this.http.get<Mng_model[]>(`${this.baseUrl}`)
  }
  updateRegisterUser(registerObj:AddMngService,id:number){
    return this.http.put<Mng_model>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegistered(id:number){
    return this.http.delete<Mng_model>(`${this.baseUrl}/${id}`)

  }
  getRegisteredUserId(id:number){
    return this.http.get<Mng_model>(`${this.baseUrl}/${id}`)
  }
}
