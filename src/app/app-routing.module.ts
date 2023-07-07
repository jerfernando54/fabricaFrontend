import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/authentication/login/login.component';
import { Page404Component } from './views/authentication/page404/page404.component';
import { RegisterComponent } from './views/authentication/register/register.component';

import { authGuard, adminGuard } from 'src/app/guards/auth.guard'

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
        path: 'dashboard',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      
      {
        path: 'finalizados',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./views/finalizados/finalizados.module').then((m) => m.FinalizadosModule)
      },
  
      {
        path: 'user',
        canActivate: [authGuard],
        loadChildren: () =>
          import('./views/user/user.module').then((m) => m.UserModule)
      },
  
      {
        path: 'authentication',
        loadChildren: () => 
          import('./views/authentication/authentication.module').then((m) => m.AuthenticationModule)
      },

      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [authGuard, adminGuard],
        data: {
          title: 'Nuevo Usuario',
          allowedRoles: ['admin']
        }
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
    canActivate: [authGuard],
    component: Page404Component,
    data: {
      title: 'Page not found'
    }
  },

  {path: '**', redirectTo: 'dashboard'}
  
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
