import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  Input 
} from '@angular/core';
import { ChartjsComponent } from '@coreui/angular-chartjs';

//Models
import {Articulo} from 'src/app/models/articulo.model';


@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class WidgetsDropdownComponent implements OnInit, AfterContentInit {

  @Input() articulos: Articulo [] = [];


  private percentaje = 0

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  getColor(total:number, unidades: number) {
    this.percentaje = (unidades * 100) / total;
    const badge = parseFloat(this.percentaje.toFixed(2));
    return badge >= 100 ? 'success' : badge >= 50 ? 'info': badge >= 30 && badge < 50 ? 'warning' : 'danger'
  }
}

@Component({
  selector: 'app-chart-sample',
  template: '<c-chart width="300" #chart></c-chart>'
})
export class ChartSample implements AfterViewInit {

  constructor() {}

  @ViewChild('chart') chartComponent!: ChartjsComponent;

  ngAfterViewInit(): void {
   
  }
}
