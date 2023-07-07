import { Component, Input, OnInit } from '@angular/core';
import { HeaderComponent } from '@coreui/angular';

import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";
  currentUser: string = ''
  
  constructor(private authService: AuthService) {
    super();
  }
  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('user')!).username
  }

  logout(): void {
    this.authService.logout();
  }
}
