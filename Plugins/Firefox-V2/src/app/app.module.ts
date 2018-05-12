import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { OptionsComponent } from './options/options.component';
import { PopupComponent } from './popup/popup.component';
import { BackgroundComponent } from './background/background.component';
import {NavbarComponent} from "../../../Firefox-X2/src/app/layout/navbar/navbar.component";


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
