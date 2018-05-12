import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PopupComponent} from "./popup/popup.component";
import {OptionsComponent} from "./options/options.component";

const routes: Routes = [
  { path: 'popup', component: PopupComponent},
  { path: 'options', component: OptionsComponent},
  { path: '', redirectTo: 'popup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
