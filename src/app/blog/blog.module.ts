import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { BlogCardComponent } from './view/blog-card/blog-card.component';


@NgModule({
  declarations: [ViewComponent, DashboardComponent, BlogCardComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
