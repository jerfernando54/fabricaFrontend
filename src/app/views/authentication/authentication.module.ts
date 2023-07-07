import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';

//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';

import { AuthenticationRoutingModule } from './authentication-routing.module';

import { AngularCoreuiModule } from 'src/app/Modules/angular-coreui/angular-coreui.module';
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component
  ],
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    ReactiveFormsModule,
    AngularCoreuiModule,
    AuthenticationRoutingModule,
  ]
})
export class AuthenticationModule { }
