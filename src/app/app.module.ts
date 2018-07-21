import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlertsComponent } from './alerts/alerts.component';
import {AlertsServiceService} from "./alerts-service.service";



@NgModule({
  declarations: [
    AppComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserTransferStateModule
  ],
  providers: [AlertsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
