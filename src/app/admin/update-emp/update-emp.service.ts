import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UpdateEmp } from 'src/app/models/update-emp';
import { UpdateEmpComponent } from './update-emp.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateEmpService {
 
  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  update( update : UpdateEmp): Observable<any>{
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    
    return this.http.put<any>("http://localhost:7000/employee/"+update.emp_id,update,{headers,responseType:'text' as 'json'});
  }
}