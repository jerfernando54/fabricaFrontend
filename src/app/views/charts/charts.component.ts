import { Component } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent {

  puestos = ['M3', 'F5', 'M5', 'Y6'];

  chartBarData = {
    labels: this.puestos,
    datasets: [
      {
        label: 'Producción',
        backgroundColor: '#3399ff',
        data: [3550, 2100, 4000, 1500]
      }
    ]
  };
}
