import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';


import { AuthComponent } from './auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AppRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    AuthComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  providers:[],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
