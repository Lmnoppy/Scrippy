import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { PopupComponent } from './popup/popup.component';
import { BackgroundComponent } from './background/background.component';
import {NavbarComponent} from "./layout/navbar/navbar.component";


@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    PopupComponent,
    BackgroundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
