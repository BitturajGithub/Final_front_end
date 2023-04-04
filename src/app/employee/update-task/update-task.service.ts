
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { Task_model1 } from 'src/app/models/task-update-model';
import { UpdateTaskComponent } from './update-task.component';


import { UpdateEmp } from 'src/app/models/update-emp';


@Injectable({
  providedIn: 'root'
})
export class UpdateTaskService {

 
  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  update( update : Task_model1): Observable<any>{
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    
    return this.http.put<any>("http://localhost:9000/task/"+update.task_id,update,{headers,responseType:'text' as 'json'});
  }
}
