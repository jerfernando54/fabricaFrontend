import { Component, OnInit } from '@angular/core';

import { navItems } from './_nav';

import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {

  public navItems = navItems;
  public userRole = ''

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(
    private auth: AuthService
  ) {}


  ngOnInit(): void {
    this.userRole = this.auth.getUserRol()
    this.navItems = this.navItems.filter(item => item.attributes?.['allowedRoles'].includes(this.userRole))
  }
}
