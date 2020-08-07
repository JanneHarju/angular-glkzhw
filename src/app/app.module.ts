import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './app.dashboard';
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule, AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, DashboardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
