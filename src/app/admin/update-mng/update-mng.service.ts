import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Mng_model_upd } from 'src/app/models/mng_update';
// import { UpdateEmp } from 'src/app/models/update-emp';
import { UpdateMngComponent } from './update-mng.component';
// import { UpdateEmpComponent } from './update-emp.component';

@Injectable({
  providedIn: 'root'
})
export class UpdateMngService {
 
  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  update( update : Mng_model_upd ): Observable<any>{
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    
    return this.http.put<any>("http://localhost:8000/manager/"+update.mng_id,update,{headers,responseType:'text' as 'json'});
  }
}