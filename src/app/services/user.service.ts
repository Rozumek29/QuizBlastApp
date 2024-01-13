import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "../config/config";
import {IUserDetails} from "../models/user.model";
import {delay, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public userInfo() : Observable<IUserDetails>{
    return this.http.get<IUserDetails>(`${config.serverUrl}/user/userinfo`);
  }
}
