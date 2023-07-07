import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// import {
//   AvatarModule,
//   ButtonGroupModule,
//   ButtonModule,
//   CardModule,
//   FormModule,
//   GridModule,
//   NavModule,
//   ProgressModule,
//   TableModule,
//   TabsModule,
//   SpinnerModule
// } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';

import { AngularCoreuiModule } from 'src/app/Modules/angular-coreui/angular-coreui.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { WidgetsModule } from '../widgets/widgets.module';
import { ProdPipe } from 'src/app/pipes/production/prod.pipe';

@NgModule({
  imports: [
    DashboardRoutingModule,
    IconModule,
    CommonModule,
    ReactiveFormsModule,
    ChartjsModule,
    WidgetsModule,
    AngularCoreuiModule,
  ],

  declarations: [DashboardComponent, ProdPipe]
})
export class DashboardModule {
}
