import { 
  Router,
  CanActivateFn, 
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';

import { AuthService} from "../Services/auth/auth.service"
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.userValue;
  if(user?.user) {
    return true
  }
  return false;
};

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isAdmin = authService.getUserRol()

  if(isAdmin){
    return true;
  }
  
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
  return false;
}
