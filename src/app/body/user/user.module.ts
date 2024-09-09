import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialsComponent } from './credentials/credentials.component';
import { IpManagerComponent } from './ip-manager/ip-manager.component';
import { RouterModule, Routes } from '@angular/router';
import {CardModule} from 'primeng/card';
import { AdminTopBarComponent } from 'src/app/shared/UIComponents/admin-top-bar/admin-top-bar.component';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';


export const UserRoutes : Routes = [
  {
    path:'credentials',
    component:CredentialsComponent
  },
  {
    path:'ip-manager',
    component:IpManagerComponent
  }
]


@NgModule({
  declarations: [
    CredentialsComponent,
    IpManagerComponent,
    AdminTopBarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CardModule,
    RouterModule.forChild(UserRoutes),
    FormsModule,
    InputTextModule,
    ButtonModule,
    DialogModule
  ]
})
export class UserModule { }
