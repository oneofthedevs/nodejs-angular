import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { ViewComponent } from './view/view.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { BlogCardComponent } from './view/blog-card/blog-card.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { AddComponent } from './view/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewComponent, DashboardComponent, BlogCardComponent, NavbarComponent, AddComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
