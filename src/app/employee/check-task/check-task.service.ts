
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Task_model } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class CheckTaskService {

  private baseUrl: string = 'http://localhost:9000/task'
  constructor(private http: HttpClient) {}
  postRegistration(registerObj: Task_model){
    return this.http.post<Task_model>(`${this.baseUrl}`, registerObj)
  }
  getRegisteredUser(){
    return this.http.get<Task_model[]>(`${this.baseUrl}`)
  }
  updateRegisterUser(registerObj:CheckTaskService,id:number){
    return this.http.put<Task_model>(`${this.baseUrl}/${id}`, registerObj)
  }
  deleteRegistered(id:number){
    return this.http.delete<Task_model>(`${this.baseUrl}/${id}`)

  }
  getRegisteredUserId(id:number){
    return this.http.get<Task_model>(`${this.baseUrl}/${id}`)
  }
}