import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecomendacionProvider } from '../providers/recomendacion/recomendacion';
import { HttpModule } from '@angular/http';
import {ActualPage} from '../pages/actual/actual';
import {DetallePage} from '../pages/detalle/detalle';
import {InicioPage} from '../pages/inicio/inicio';
import {CreditosPage} from '../pages/creditos/creditos'
import {InfoPage} from '../pages/info/info';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,ActualPage,
    InicioPage,
    DetallePage, 
    CreditosPage,
    InfoPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActualPage,
    InicioPage,
    DetallePage,
    CreditosPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecomendacionProvider
  ]
})
export class AppModule {}
