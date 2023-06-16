import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development'

import { Auth } from 'src/app/models/user.model';
import { authData } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl = environment.baseURL;

  public user!: Observable<Auth | null>;
  private userSubject!: BehaviorSubject<Auth | null>;
  

  constructor(
    private router: Router,
    private _http: HttpClient
  ){
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

   public get userValue() {
    return this.userSubject.value;
  }

  login(authData:authData ): Observable<Auth>{
    return this._http.post<Auth>(`${this.baseUrl}auth/login`, authData).pipe(
      map(res => {
        localStorage.setItem('token', JSON.stringify(res.token))
        this.userSubject.next(res);
        return res
      })
    )
  }

  getToken(): string{
    const token = localStorage.getItem('token')!;
    return token;
  }

  getUserRol(): boolean {
    return this.userValue?.user?.role === 'admin' ? true : false;
  }

  logout(): void{
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.userSubject.next(null);
    this.router.navigate(['login']);
  }
}
