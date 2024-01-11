import {Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {QuestionsComponent} from "./components/questions/questions.component";
import {CategoriesComponent} from "./components/categories/categories.component";
import {UsersComponent} from "./components/users/users.component";

export const AdminRoutes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  {path: 'questions', pathMatch: 'full', component: QuestionsComponent},
  {path: 'categories', pathMatch: 'full', component: CategoriesComponent},
  {path: 'users', pathMatch: 'full', component: UsersComponent}
]
