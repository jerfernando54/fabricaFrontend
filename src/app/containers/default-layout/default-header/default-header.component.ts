import { Component, Input } from '@angular/core';
import { HeaderComponent } from '@coreui/angular';

import { AuthService } from 'src/app/Services/auth/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor(private authService: AuthService) {
    super();
  }

  logout(): void {
    this.authService.logout();
  }
}
