import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {constants} from "../config/constants";
import {IUser} from "../models/auth.model";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  isAuthentication: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  )

  constructor() {
    const token = this.getToken();
    if (token){
      this.updateToken(true);
    }
  }

  updateToken(status: boolean) {
      this.isAuthentication.next(status);
  }

  setToken(token : string){
    this.updateToken(true);
    localStorage.setItem(constants.CURRENT_TOKEN, token);
  }

  getToken():string | null {
    return localStorage.getItem(constants.CURRENT_TOKEN) || null;
  }

  removeToken(){
    this.updateToken(false);
    return localStorage.removeItem(constants.CURRENT_TOKEN);
  }

  getUser(): IUser{
    const token = localStorage.getItem(constants.CURRENT_TOKEN);
    if (token != null) {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return {
        id: Number.parseInt(decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']),
        role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
        expiration: decoded.exp
      };
    }
    throw new Error("Token not found")
  }
}
