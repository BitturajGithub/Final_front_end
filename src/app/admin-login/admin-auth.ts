import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminroleGuard implements CanActivate {
  constructor(private cookie : CookieService,private route :Router){}
  canActivate() {
    this.cookie.get("token");
    return true;
    // let role = this.cookie.get("Role");
    // if(role =="Admin"){
    //   return true;
    // }
    // alert("You are not authorized to this Page!!!");
    // if(role =="Employee"){
    //   this.route.navigate(['/employee']);
    // }
    // else if(role == "Manager"){
    //   this.route.navigate(['/manager']);
      
    // }
    // return false;
   
  }
  
}