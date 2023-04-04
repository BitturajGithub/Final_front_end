import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Emp_model } from 'src/app/models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class AddEmpService {

  
  // private baseUrl: string = 'http://localhost:8000/emp'
  private baseUrl: string = 'http://localhost:7000/employee'
  constructor(private http: HttpClient) {}
  onSignup(data: any): Observable<any> {
    return this.http.post('http://localhost:7000/employee', data);
  }
  getRegisteredUserId(Employee_name:string){
    return this.http.get<Emp_model>(`${this.baseUrl}/${Employee_name}`)
}
  postRegistration(registerObj: Emp_model){
    return this.http.post<Emp_model>(`${this.baseUrl}`, registerObj)
  }

}
