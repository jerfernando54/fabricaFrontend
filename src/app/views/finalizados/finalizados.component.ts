import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Articulo } from 'src/app/models/articulo.model';
import { DashboardService } from 'src/app/Services/dashboard/dashboard.service'

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.scss']
})
export class FinalizadosComponent {

  public percentaje: number = 0;
  public showStatus: boolean = true;
  public statusTitle: string = '';

  public articulos: Articulo [] = [];

  constructor(
    private _service: DashboardService
  ) {
  }

  ngOnInit(): void {
    this._service.getDashboardData().pipe(
      map((res) => this.articulos = res)
    ).subscribe();

    this.getData();
  }
  getData() {
    setInterval(() => {
      this._service.getDashboardData().pipe(
        map((res) => this.articulos = res.filter(element => element.UNID_EMBALADAS! >= element.Cantidad!)
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
  
}
