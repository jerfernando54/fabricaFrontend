import { 
  Router,
  CanActivateFn, 
  CanMatchFn,
  Route,
  UrlSegment
} from '@angular/router';

import { AuthService} from "../Services/auth/auth.service"
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);

  const user = authService.userValue;

  if(user) {
    return true
  }
  return router.createUrlTree(['/login']);
};

export const adminGuard: CanActivateFn = (route, state) => {
  const allowedRoles = route.data?.['allowedRoles'] || []
  const authService = inject(AuthService);

  if(allowedRoles){
    const userRole = authService.getUserRol()
    return allowedRoles.includes(userRole) ? true : false
  }
  return true
}






