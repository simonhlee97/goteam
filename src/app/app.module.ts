import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColtsComponent } from './colts/colts.component';
import { PacersComponent } from './pacers/pacers.component';

import { RouterModule } from "@angular/router";
import { routes } from "./constants/routes";

@NgModule({
  declarations: [
    AppComponent,
    ColtsComponent,
    PacersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
