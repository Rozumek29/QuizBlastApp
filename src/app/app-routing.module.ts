import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {UserComponent} from "./pages/user/user.component";
import {adminGuard} from "./guards/admin.guard";
import {guestGuard} from "./guards/guest.guard";
import {userGuard} from "./guards/user.guard";
import {PageNotFoundComponent} from "./errors/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', pathMatch: 'full', component: LoginComponent, canActivate: [guestGuard]},
  {path: 'admin', component: AdminComponent, canActivate:[adminGuard], children: [
      {path: '', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule)}
    ]},
  {path: 'app', component: UserComponent, canActivate: [userGuard], children: [
      {path: '', loadChildren: () => import("./pages/user/user.module").then(m => m.UserModule)}
    ]},
  {path: "**", pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
