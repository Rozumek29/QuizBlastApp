import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../services/token.service";

export const adminGuard: CanActivateFn = (route, state) => {

  const tokenService = inject(TokenService);
  const router = inject(Router);

  tokenService.isAuthentication.subscribe({
    next:(response) => {
      if (!response){
        router.navigate(['login'])
      }else {
        var role = tokenService.getUser()?.role;
        if ((role !== "Admin") && (role !== "Manager")){
          router.navigate(['**']);
        }
      }
    }
  })
  return true;
};
