import { Injectable } from '@angular/core';
import { LocalServiceService } from './local-service.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Routes, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuarGuard implements CanActivate {
  constructor(private service:LocalServiceService,private route: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      if(this.service.loginSucessfull()){
        console.log(state.url);
        return this.route.navigate(["/"],{queryParams:{"returnURL" :state.url}});
      }
      else
      {
         return this.route.navigate(["/"],{queryParams:{"returnURL" :"state.url"}});
         
      }
      
      
  }
  
}
