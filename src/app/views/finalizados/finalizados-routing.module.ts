import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadosComponent } from './finalizados.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Finalizados'
    },
    children : [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'finalizados'
      },
      {
        path: 'finalizados',
        component: FinalizadosComponent,
        data: {
          title: 'Pedidos Finalizados'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalizadosRoutingModule { }
