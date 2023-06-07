import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Articulo } from 'src/app/models/articulo.model';
import { environment } from 'src/environments/environment.development'


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = environment.baseURL;

  constructor(
    private _http: HttpClient
  ) { }

  getDashboard(): Observable<Articulo[]> {
    return this._http.get<Articulo[]>(`${this.baseUrl}puestos`)
  }

}
