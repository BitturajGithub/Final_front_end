import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

import { Leave__approval_model } from 'src/app/models/leave_approval_modal';


@Injectable({
  providedIn: 'root'
})

export class LeaveApprovalService {

 
  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  update( update : Leave__approval_model): Observable<any>{
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    
    return this.http.put<any>("http://localhost:9000/leave/"+update.process_id,update,{headers,responseType:'text' as 'json'});
  }
}
