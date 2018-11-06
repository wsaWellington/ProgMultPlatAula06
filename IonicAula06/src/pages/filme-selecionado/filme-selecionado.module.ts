import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmeSelecionadoPage } from './filme-selecionado';

@NgModule({
  declarations: [
    FilmeSelecionadoPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmeSelecionadoPage),
  ],
})
export class FilmeSelecionadoPageModule {}
