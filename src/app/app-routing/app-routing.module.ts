import { ContactFormComponent } from './../contact-form/contact-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
      path: 'contact',
      component: ContactFormComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () => import('../modules/dashboard.module').then(mod => mod.DashboardModule)
},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
