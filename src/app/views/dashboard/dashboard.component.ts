import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs';

import { Articulo } from 'src/app/models/articulo.model';
import { DashboardService } from 'src/app/Services/dashboard/dashboard.service'

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  
  public percentaje: number = 0;
  public statusTitle: string = '';

  public articles: Articulo [] = [];

  private _temporal: any;
  private _intervalId: any;
  private _articleSubscription: any

  constructor(
    private _service: DashboardService,
  ) {
  }
  
  ngOnInit(): void {

    this._temporal = JSON.parse(localStorage.getItem('dashboardData')!)
    if(this._temporal === null){
      this._articleSubscription = this._service.getDashboardData().subscribe(res => {
        this._temporal = JSON.parse(localStorage.getItem('dashboardData')!),
        this.articles = this._temporal.filter((element:Articulo) => element.UNID_EMBALADAS! <= element.Cantidad!)
        this.orderDesc(this.articles)
      })
    } else {
      this.articles = this._temporal.filter((element:Articulo) => element.UNID_EMBALADAS! <= element.Cantidad!)
      this.orderDesc(this.articles)
    }

    this.getData();
  }

  getData() {
    this._intervalId = setInterval(() => {
      this._articleSubscription = this._service.getDashboardData().pipe(
        map((res) => {
          this.articles = res.filter((element:Articulo) => element.UNID_EMBALADAS! <= element.Cantidad!)
          this.orderDesc(this.articles)
        }
      )).subscribe();
    }, 200000)
  }

  orderDesc(articles: Articulo[]): void {
    articles.sort((a, b)=> b.UNID_EMBALADAS! - a.UNID_EMBALADAS!)
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

  ngOnDestroy(): void {
    clearInterval(this._intervalId);
    if(this._articleSubscription){
      this._articleSubscription.unsubscribe();
    }
  }

}
