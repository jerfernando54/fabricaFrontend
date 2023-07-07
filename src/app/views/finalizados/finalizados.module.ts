import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalizadosComponent } from './finalizados.component';
import { FinalizadosRoutingModule } from './finalizados-routing.module';
import { FilterFinalizedsPipe } from 'src/app/pipes/finisheds/filter-finalizeds.pipe'

import { AngularCoreuiModule } from 'src/app/Modules/angular-coreui/angular-coreui.module';


@NgModule({
  declarations: [
    FinalizadosComponent,
    FilterFinalizedsPipe
  ],
  imports: [
    CommonModule,
    AngularCoreuiModule,
    FinalizadosRoutingModule,
  ]
})
export class FinalizadosModule { }
