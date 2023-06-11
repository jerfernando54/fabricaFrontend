import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const  authGuardFn: CanActivateFn  = () => {
  //const tokenService = inject(TokenService);
  const routerService = inject(Router);

  const token = true;

  if(!token) {
    routerService.navigate(['/login'])
    return false;
  }
  return true;
}