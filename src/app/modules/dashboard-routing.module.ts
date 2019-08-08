import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard-component/dashboard.component';

const dashboardRoutes: Routes = [
  {
      path: '',
      component: DashboardComponent,
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)
  ],
  exports:[],
  declarations: []
})
export class DashboardRoutingModule { }
