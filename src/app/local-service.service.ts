import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor() { }
  loginSucessfull()
  {
    let token = localStorage.getItem("token");
    if(token){
      return true;
    }

    return false;
  }
  user(){
    let token = localStorage.getItem("token");
    let helper = new JwtHelperService();
    const details = helper.decodeToken(token);
    return details;
  }
}
