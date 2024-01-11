import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from "../config/config";
import {ILoginRequest, ILoginResponse} from "../models/auth.model";
import {map} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  public login(request: ILoginRequest){
    return this.http.post<ILoginResponse>(`${config.serverUrl}/authenticate/login`, request)
      .pipe(
        map((response) => {
          if (response){
            this.tokenService.setToken(response.token);
          }
          return response;
        })
      );
  }
}
