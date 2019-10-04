import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from "ag-grid-angular";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgxChartsModule,
    HttpClientModule,
    AgGridModule.withComponents([AppComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
