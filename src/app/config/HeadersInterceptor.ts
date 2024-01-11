import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {TokenService} from "../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class HeadersInterceptor implements HttpInterceptor {
  private token : string | null;

  constructor(private tokenService: TokenService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this.tokenService.getToken();
    if (this.token){
      const modReq = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${this.token}`,
          'Content-Type': 'application/json'
        }
      })
      return next.handle(modReq);
    }
    return next.handle(req);
  }
}
