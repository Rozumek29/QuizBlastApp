import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {RouterModule} from "@angular/router";
import {AdminRoutes} from "./adminRoutes";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzIconModule} from "ng-zorro-antd/icon";
import { QuestionsComponent } from './components/questions/questions.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { UsersComponent } from './components/users/users.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {AppModule} from "../../app.module";



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    QuestionsComponent,
    CategoriesComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AdminRoutes),
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule,
    NzSpaceModule,
    NzDropDownModule,
    AppModule
  ],
  exports: [RouterModule],

})
export class AdminModule { }
