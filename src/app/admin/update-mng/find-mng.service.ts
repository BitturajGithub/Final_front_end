import { Injectable } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class FindMngService {

  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  getDetails(mng_id: Number){
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    return this.http.get("http://localhost:8000/manager/"+mng_id,{headers,responseType:'text' as 'json'});
  }
}