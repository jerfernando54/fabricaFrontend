import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NavModule,
  CardModule,
  FormModule,
  GridModule,
  TabsModule,
  TableModule,
  ButtonModule,
  AvatarModule,
  TooltipModule,
  SpinnerModule,
  ProgressModule,
  ButtonGroupModule,
  BadgeModule,
  BreadcrumbModule,
  DropdownModule,
  FooterModule,
  HeaderModule,
  ListGroupModule,
  SharedModule,
  SidebarModule,
  UtilitiesModule,
  ToastModule,
  ModalModule 
} from '@coreui/angular';

@NgModule({
  declarations: [],
  imports: [
    NavModule,
    CardModule,
    FormModule,
    GridModule,
    TabsModule,
    TableModule,
    ModalModule,
    ToastModule,
    BadgeModule,
    ButtonModule,
    CommonModule,
    AvatarModule,
    FooterModule,
    HeaderModule,
    SharedModule,
    TooltipModule,
    SpinnerModule,
    SidebarModule,
    ProgressModule,
    DropdownModule,
    UtilitiesModule,
    ListGroupModule,
    BreadcrumbModule,
    ButtonGroupModule,
  ], 
  
  exports: [
    NavModule,
    CardModule,
    FormModule,
    GridModule,
    TabsModule,
    TableModule,
    ModalModule,
    ToastModule,
    BadgeModule,
    ButtonModule,
    CommonModule,
    AvatarModule,
    FooterModule,
    HeaderModule,
    SharedModule,
    TooltipModule,
    SpinnerModule,
    SidebarModule,
    ProgressModule,
    DropdownModule,
    UtilitiesModule,
    ListGroupModule,
    BreadcrumbModule,
    ButtonGroupModule,
  ]
})
export class AngularCoreuiModule { }
