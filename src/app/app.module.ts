import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';

// Import fake backend provider
import { fakeBackendProvider } from './_helpers/fake-backend';

// import authorization Interceptor
import {AuthInterceptorService} from './interceptors/auth-interceptor.service'
import {AngularCoreuiModule} from 'src/app/Modules/angular-coreui/angular-coreui.module'

import { ShowForRolesDirective } from './directive/auth/show-for-roles.directive';


import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ToastSampleComponent } from './views/toast-sample/toast-sample.component';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent, 
    ...APP_CONTAINERS, 
    ShowForRolesDirective, ToastSampleComponent,
  ],

  imports: [
    IconModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgScrollbarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularCoreuiModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    IconSetService,
    Title,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  exports: [
    ShowForRolesDirective,
    ToastSampleComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {
}
