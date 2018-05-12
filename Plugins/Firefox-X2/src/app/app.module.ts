import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import { OptionsComponent } from './options/options.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EventpageComponent } from './eventpage/eventpage.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OptionsComponent,
    HomepageComponent,
    EventpageComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
