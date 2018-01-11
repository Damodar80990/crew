import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { homeComponent } from '../pages/home/home.component';
import { listComponent } from '../pages/list/list.component';
import { projectDetailsComponent } from '../pages/project-details/project-details.component';
import { laborComponent } from '../pages/labor/labor.component';
import { loginComponent } from '../pages/login/login.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    homeComponent,
    listComponent,
    projectDetailsComponent,
    laborComponent,
    loginComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    homeComponent,
    listComponent,
    projectDetailsComponent,
    laborComponent,
    loginComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
