import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component'
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {
    path:"users",
    component: UsersComponent,
    data: {
      title: $localize`Todos usuarios`,
      allowedRoles:['admin']
    }
  },
 
  {
    path:":userId",
    component: UserProfileComponent,
    data: {
      title: $localize`User`,
      allowedRoles:['admin', 'fabrica']
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
