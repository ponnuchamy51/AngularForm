import { GithubProfileComponent } from './../github-profile/github-profile.component';
import { GithubFollowersComponent } from './../github-followers/github-followers.component';
import { PostsComponent } from './../posts/posts.component';
import { FormArrayComponent } from './../form-array/form-array.component';
import { SignupFormComponent } from './../signup-form-component/signup-form.component';
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
    path: 'form-array',
    component: FormArrayComponent,
  },
  {
    path: 'signup',
    component: SignupFormComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'profile/:id',
    component: GithubProfileComponent,
  },
  {
    path: 'followers',
    component: GithubFollowersComponent,
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
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
