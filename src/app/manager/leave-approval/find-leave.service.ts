import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'; 

@Injectable({
  providedIn: 'root'
})

export class FindLeaveService {


  token : string=this.cookie.get("Token")

  constructor(private http : HttpClient, private cookie : CookieService) { }

  getDetails(process_id: Number){
    let tokenstr= 'Bearer '+this.token;
    const headers = new HttpHeaders().set("Authorization",tokenstr);
    return this.http.get("http://localhost:9000/leave/"+process_id,{headers,responseType:'text' as 'json'});
  }
}