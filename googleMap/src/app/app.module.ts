import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment'

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
export const  firebaseConfig = environment.firebaseConfig;
import {AgmCoreModule} from '@agm/core';
import { FormsModule } from '@angular/forms';
import { GeoService } from './geo.service'




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapKey
    }),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [GeoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
