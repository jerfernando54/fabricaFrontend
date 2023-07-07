import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from '@coreui/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule
  ],
  exports: [
    ToastModule
  ]
})
export class BootstrapComponentsModule { }
