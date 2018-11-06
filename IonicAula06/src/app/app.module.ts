import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CrudPageModule } from '../pages/crud/crud.module';
import { IncluirPageModule } from '../pages/incluir/incluir.module';
import { ExcluirPageModule } from '../pages/excluir/excluir.module';
import { AlterarPageModule } from '../pages/alterar/alterar.module';
import { SelecionarPageModule } from '../pages/selecionar/selecionar.module';
import { FilmeSelecionadoPageModule } from '../pages/filme-selecionado/filme-selecionado.module';
import { PopularidadePageModule } from '../pages/popularidade/popularidade.module';
import { GenerosPageModule } from '../pages/generos/generos.module';
import { LancamentosPageModule } from '../pages/lancamentos/lancamentos.module';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CrudPageModule,
    IncluirPageModule,
    ExcluirPageModule,
    AlterarPageModule,
    SelecionarPageModule,
    FilmeSelecionadoPageModule,
    PopularidadePageModule,
    GenerosPageModule,
    LancamentosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
