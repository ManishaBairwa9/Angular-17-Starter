import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NoaccessComponent } from './noaccess/noaccess.component';

export const bodyRoutes : Routes = [
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  { path: '**', redirectTo: '404' }
]

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NoaccessComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(bodyRoutes)
  ],
  exports:[]
})
export class BodyModule { }
