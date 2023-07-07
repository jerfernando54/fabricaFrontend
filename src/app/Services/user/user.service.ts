import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, first, map } from 'rxjs';
import { environment } from 'src/environments/environment'

import { actionUserResponse } from 'src/app/models/user.model'
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private readonly baseUrl = environment.baseURL;

  constructor(
    private _http: HttpClient
  ) { }

  addUser(user:any): Observable<actionUserResponse>{
    return this._http.post<actionUserResponse>(`${this.baseUrl}user`, user).pipe(
      map(res => {
        this.getUsers()
        return res
      })
    )
  }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${this.baseUrl}user`).pipe(
      map(res => {
        localStorage.setItem('users', JSON.stringify(res))
        return res
      })
    )
  }

  getUser(userId:any): Observable<User> {
    return this._http.get<User>(`${this.baseUrl}user/${userId}`, ).pipe(first())
  }

  updateUser(user: User): Observable<actionUserResponse> {
    const userRole = user.role
    if(userRole == 'Administrador') {
      user.role = 'admin'
    }else {
      user.role = 'fabrica'
    }
    
    return this._http.put<actionUserResponse>(`${this.baseUrl}user`, user).pipe(
      map(res => {
        this.getUsers()
        return res
      })
    )
  }

  deleteUser(userId:string): Observable<actionUserResponse> {
    return this._http.delete<actionUserResponse>(`${this.baseUrl}user/${userId}`).pipe(
      map(res => {
        this.getUsers()
        return res
      })
    )
  }

}
