import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development'

import { Auth } from 'src/app/models/user.model';
import { User } from 'src/app/models/user.model';
import { authData } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.baseURL;

  public auth!: Observable<Auth | null>;
  private userSubject!: BehaviorSubject<Auth | null>;
  public user!: User
  

  constructor(
    private router: Router,
    private _http: HttpClient
  ){
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('token')!));
    this.auth = this.userSubject.asObservable();
  };

   public get userValue() {
    return this.userSubject.value;
  };

  login(authData:authData ): Observable<Auth>{
    return this._http.post<Auth>(`${this.baseUrl}auth/login`, authData).pipe(
      map(res => {
        localStorage.setItem('user', JSON.stringify(res.user))
        localStorage.setItem('token', JSON.stringify(res.token))
        this.userSubject.next(res);
        return res
      })
    );
  };

  getUserRol(): string {
    this.user = JSON.parse(localStorage.getItem('user')!)
    return this.user?.role!
  };

  logout(): void{
    this.userSubject.next(null);

    localStorage.removeItem('user');
    localStorage.removeItem('users');
    localStorage.removeItem('token');
    localStorage.removeItem('dashboardData');

    this.router.navigate(['login']);
  };
}
