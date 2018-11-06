import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudPage } from '../crud/crud';

/**
 * Generated class for the IncluirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incluir',
  templateUrl: 'incluir.html',
})
export class IncluirPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncluirPage');
  }

  goToCrudPage (){
    this.navCtrl.push(CrudPage);
   }
}
