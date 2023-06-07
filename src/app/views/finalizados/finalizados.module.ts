import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalizadosComponent } from './finalizados.component';
import { FinalizadosRoutingModule } from './finalizados-routing.module';

import {
  CardModule,
  GridModule,
  ProgressModule,
  TableModule,
} from '@coreui/angular';


@NgModule({
  declarations: [
    FinalizadosComponent
  ],
  imports: [
    CardModule,
    GridModule,
    TableModule,
    CommonModule,
    ProgressModule,
    FinalizadosRoutingModule
  ]
})
export class FinalizadosModule { }
