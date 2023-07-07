import { Directive, Input} from '@angular/core';
import { Roles } from './../../models/roles.model'
import { AuthService } from 'src/app/Services/auth/auth.service';

@Directive({
  selector: '[appShowForRoles]'
})
export class ShowForRolesDirective {
  @Input('appShowForRoles') allowedRoles?: Roles[];

  constructor(
    private auth: AuthService
  ) { }

}
