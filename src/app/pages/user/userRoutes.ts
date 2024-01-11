import {Routes} from "@angular/router";
import {UserDashboardComponent} from "./components/user-dashboard/user-dashboard.component";

export const UserRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', pathMatch: 'full', component: UserDashboardComponent}
]
