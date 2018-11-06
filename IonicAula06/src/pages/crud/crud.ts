import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IncluirPage } from '../incluir/incluir';
import { ExcluirPage } from '../excluir/excluir';
import { AlterarPage } from '../alterar/alterar';
import { SelecionarPage } from '../selecionar/selecionar';

/**
 * Generated class for the CrudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crud',
  templateUrl: 'crud.html',
})
export class CrudPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrudPage');
  }

  goToIncluirPage (){
    this.navCtrl.push(IncluirPage);
   }

   goToExcluirPage (){
    this.navCtrl.push(ExcluirPage);
   }

   goToAlterarPage (){
    this.navCtrl.push(AlterarPage);
   }

   goToSelecionarPage (){
    this.navCtrl.push(SelecionarPage);
   }
}
