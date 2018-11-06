import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmeSelecionadoPage } from '../filme-selecionado/filme-selecionado';
import { CrudPage } from '../crud/crud';

/**
 * Generated class for the SelecionarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecionar',
  templateUrl: 'selecionar.html',
})
export class SelecionarPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecionarPage');
  }
  goToFilmeSelecionadoPage (){
    this.navCtrl.push(FilmeSelecionadoPage);
   }

}
