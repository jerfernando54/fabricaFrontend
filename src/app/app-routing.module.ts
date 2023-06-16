import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/authentication/login/login.component';
import { Page404Component } from './views/authentication/page404/page404.component';
import { RegisterComponent } from './views/authentication/register/register.component';

import { authGuard, isAdminGuard } from 'src/app/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    
    children: [
      {
        canActivate: [authGuard],
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      
      {
        canActivate: [authGuard],
        path: 'finalizados',
        loadChildren: () =>
          import('./views/finalizados/finalizados.module').then((m) => m.FinalizadosModule)
      },
      {
        path: 'authentication',
        loadChildren: () => 
          import('./views/authentication/authentication.module').then((m) => m.AuthenticationModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page not found'
    }
  },

  {
    canActivate: [authGuard, isAdminGuard],
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
