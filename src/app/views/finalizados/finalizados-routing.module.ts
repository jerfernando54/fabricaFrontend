import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalizadosComponent } from './finalizados.component';

const routes: Routes = [
  {
    path: '',
    component: FinalizadosComponent,
    data: {
      title: $localize`Dashboard`,
      allowedRoles:['admin', 'fabrica']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalizadosRoutingModule { }
