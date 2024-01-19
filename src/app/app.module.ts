import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/UIComponents/button/button.component';
import { AdminTopBarComponent } from './shared/UIComponents/admin-top-bar/admin-top-bar.component';
import { ApplicantTopbarComponent } from './shared/UIComponents/applicant-topbar/applicant-topbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AdminTopBarComponent,
    ApplicantTopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
