import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserComponent} from './user.component';
import {UserDashboardComponent} from './components/user-dashboard/user-dashboard.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import {UserRoutes} from "./userRoutes";


@NgModule({
  declarations: [
    UserComponent,
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  exports: [RouterModule]
})
export class UserModule {
}
