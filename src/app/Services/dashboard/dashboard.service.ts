import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Articulo } from 'src/app/models/articulo.model';
import { environment } from 'src/environments/environment.development'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly baseUrl = environment.baseURL;
  
  constructor(
    private _http: HttpClient
  ) { }

  getDashboardData(): Observable<Articulo[]> {
    // const headers = new HttpHeaders().set("Authorization", this._auth.userValue?.token!);
    // return this._http.get<Articulo[]>(`${this.baseUrl}/cajas/puestos`, {headers: headers})

    return this._http.get<Articulo[]>(`${this.baseUrl}cajas/puestos`).pipe(
      map((res:Articulo[]) => {
        localStorage.setItem('dashboardData', JSON.stringify(res))
        return res
      })
    )
  }

}
