import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import AuthRoutingModule from './auth-routing.module';
import TemplateModule from '@app/template/template.module';

// Components
import LoginComponent from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TemplateModule,
    ReactiveFormsModule
  ]
})
export default class AuthModule { }
