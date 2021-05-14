import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { UsersListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'list', component: UsersListComponent },
      { path: 'detail/:id', component: UserDetailComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
