import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import { GuardService } from './guard.service';
import { GuardService } from './auth-guard.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth : GuardService,private route : Router){}
  canActivate(){
    if(this.auth.onSubmit()){
      return true;
    }
    alert("You are not authorized, Please Login!!!");
    this.route.navigate(['/login']);
    return false;
  }
  
}