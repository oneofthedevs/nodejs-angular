import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { AddComponent } from './view/add/add.component';

const routes: Routes = [
  {
    path: '',
    component: ViewComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'add',
        component: AddComponent
      },
      {
        path: 'add/:id',
        component: AddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
