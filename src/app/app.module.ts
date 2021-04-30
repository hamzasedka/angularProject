import { NavComponent } from './../../projects/ui/src/lib/components/nav/nav.component';

import { MaterialModule } from './../../projects/ui/src/lib/material.module';
import { UiModule } from './../../projects/ui/src/lib/ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'projects/auth/src/lib/auth-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { environment } from 'src/environments/environment.prod';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from 'projects/auth/src/public-api';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    UiModule,
    MaterialModule,
    FormsModule,
    AuthModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
