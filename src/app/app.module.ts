import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrasiComponent } from './auth/registrasi/registrasi.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { MaterialDesign } from './material/material';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrasiComponent,
    ForgotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesign,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule

  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
