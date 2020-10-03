import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ViewComponent } from './view/view.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';


@NgModule({
  declarations: [NavbarComponent, LoginComponent, RegisterComponent, ViewComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
