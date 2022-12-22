import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MqttModule } from 'ngx-mqtt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { HighchartsChartModule } from 'highcharts-angular';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    HighchartsChartModule,MqttModule,ToggleButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
