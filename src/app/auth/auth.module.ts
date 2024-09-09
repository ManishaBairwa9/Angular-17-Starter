import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {ButtonModule} from 'primeng/button';

export const loginRoutes : Routes = [
  {
    path:'',
    component:LoginComponent
  }
]



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(loginRoutes),
    ButtonModule
  ]
})
export class AuthModule { }
