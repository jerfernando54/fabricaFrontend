import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

import { Articulo } from 'src/app/models/articulo.model';
import { DashboardService } from './../../Services/dashboard/dashboard.service'

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  public percentaje: number = 0;
  public showStatus: boolean = true;
  public statusTitle: string = '';

  public articulos: Articulo [] = [];

  constructor(
    private _service: DashboardService
  ) {
  }

  ngOnInit(): void {
    this._service.getDashboard().pipe(
      map((res) => this.articulos = res.filter(element => element.UNID_EMBALADAS! <= element.Cantidad!)
    )).subscribe(() => this.articulos.sort((a, b)=> b.UNID_EMBALADAS! - a.UNID_EMBALADAS!));

    this.getData();
  }

  getData() {
    setInterval(() => {
      this._service.getDashboard().pipe(
        map((res) => this.articulos = res.filter(element => element.UNID_EMBALADAS! <= element.Cantidad!)
      )).subscribe();
    }, 200000)
  }

  calcularPercentaje(total: number, actual: number): number{
    this.percentaje = (actual * 100) / total;
    const pc = parseFloat(this.percentaje.toFixed(2));
    return pc;
  }

  calcularBadge(total: number, actual: number) : number{
    return this.calcularPercentaje(total, actual);
  }

  getColor(total: number, actual: number) : string{
    const badge = this.calcularPercentaje(total, actual);
    return badge >= 100 ? 'success' : badge >= 50 ? 'info': badge >= 30 && badge < 50 ? 'warning' : 'danger'
  }

  getStatus(total: number, unidades: number): string {
    return unidades >= total ? 'Finalizado' : 'En Producción';
  }
  
  showChecked(total: number, unidades: number): boolean {
    return unidades >= total ? true : false;
  }



}
