import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filme';


/**
 * Generated class for the GenerosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-generos',
  templateUrl: 'generos.html',
})
export class GenerosPage {

  public filmes: Filme[];

  constructor(public navCtrl: NavController) {

  var l1 = { nome: 'Terminator', popularidade: '', ano: '', diretor: '', img:'', sinopse: '' };
  var l2 = { nome: 'Vingadores', popularidade: '', ano: '', diretor: '', img:'', sinopse: '' };
  var l3 = { nome: 'Rambo', popularidade: '', ano: '', diretor: '', img:'', sinopse: '' }; 
  this.filmes = [l1,l2,l3];
  }


  }

  //ionViewDidLoad() {
    //console.log('ionViewDidLoad GenerosPage');
 // }

//}
