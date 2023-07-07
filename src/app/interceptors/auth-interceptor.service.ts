import { Injectable } from '@angular/core';

import { 
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http'

import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor {
  status_error = [400, 401]
  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let request = req;

    if(token){
      request = req.clone({
        setHeaders: {
          Authorization: token
        }
      });
    }
    
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status == 401 ) {
          this.auth.logout();
        }
        if (err.status == 400 ) {
          return throwError(() => new Error(err.error.Message || err.error));
        }
        return throwError(() => new Error(err.error.Message || 'Internal error'));
      })
    );

  }
}
