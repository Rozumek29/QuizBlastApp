import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {TokenService} from "../services/token.service";

export const guestGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  tokenService.isAuthentication.subscribe({
    next:(value) => {
      if (value){
        const role = tokenService.getUser()?.role;
        switch (role) {
          case "Admin":
            router.navigateByUrl("admin/dashboard");
            break;
          case "Manager":
            router.navigateByUrl("admin/dashboard");
            break;
          default:
            router.navigateByUrl("app/dashboard")
        }
      }
    }
  })
  return true;
};
