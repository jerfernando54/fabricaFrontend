import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Articulo } from 'src/app/models/articulo.model';
import { environment } from 'src/environments/environment.development'
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly baseUrl = environment.baseURL;
  
  constructor(
    private _http: HttpClient,
    private _auth: AuthService
  ) { }

  getDashboard(): Observable<Articulo[]> {
    const headers = new HttpHeaders().set("Authorization", this._auth.userValue?.token!);
   
    return this._http.get<Articulo[]>(`${this.baseUrl}/cajas/puestos`, {headers: headers})
  }

}
