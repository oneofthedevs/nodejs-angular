import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogModule } from './blog/blog.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './blog/blog.module#BlogModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#LazyModule'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
