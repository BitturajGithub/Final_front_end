import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private cookie : CookieService) { }
  onSubmit(){
    return !!this.cookie.get('token');
  }
}