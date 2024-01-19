import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './body/page-not-found/page-not-found.component';
import { NoaccessComponent } from './body/noaccess/noaccess.component';

const routes: Routes = [
  { path: '404', component: PageNotFoundComponent  },
  { path: 'noaccess', component: NoaccessComponent },
  {
    path:'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'',
    loadChildren:()=>import('./body/body.module').then(m=>m.BodyModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
