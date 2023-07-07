import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { IconModule } from '@coreui/icons-angular';
import { ToastComponent } from '@coreui/angular';
import { AngularCoreuiModule } from 'src/app/Modules/angular-coreui/angular-coreui.module';

@NgModule({
  declarations: [
    UsersComponent,
    UserProfileComponent,
  ],
  imports: [
    IconModule,
    FormsModule,
    CommonModule,
    CommonModule,
    ToastComponent,
    UserRoutingModule,
    ReactiveFormsModule,
    AngularCoreuiModule
  ],

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] 
})
export class UserModule { }
