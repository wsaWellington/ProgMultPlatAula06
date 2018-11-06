import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filme';

/**
 * Generated class for the AlterarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar',
  templateUrl: 'alterar.html',
})
export class AlterarPage {

  public filmes: Filme[];
  constructor(public navCtrl: NavController) {
    var l1 = { nome: 'Os Vingadores', diretor: 'Joss Whedon', ano: '2012', popularidade: '225.5',img: "../assets/imgs/vingadores.png", sinopse: "" };
    var l2 = { nome: 'O Exterminador do Futuro 2: O Julgamento Final', diretor: 'James Cameron', ano: '1991', popularidade: '225.5', img: "../assets/imgs/exterminador.jpg", sinopse: "" };
    var l3 = { nome: 'Cisne Negro', diretor: 'Darren Aronofsky', ano: '2010', popularidade: '225.5', img: "../assets/imgs/cisneNegro.jpeg", sinopse: "" };
    var l4 = { nome: 'Hoje Eu Quero Voltar Sozinho', diretor: 'Daniel Ribeiro', ano: '2010', popularidade: '225.5', img: "../assets/imgs/hoje-eu-quero-voltar-sozinho.jpg", sinopse: "" };
    var l5 = { nome: 'Batman: O Cavaleiro das Trevas', diretor: 'Christopher Nolan', ano: '2008', popularidade: '225.5', img: "../assets/imgs/batman.jpg", sinopse: "" };
    var l6 = { nome: 'Expedition Happiness', diretor: 'Felix Starck', ano: '2017', popularidade: '225.5', img: "../assets/imgs/expediction.jpg", sinopse: "" };
    this.filmes = [l1, l2, l3, l4, l5, l6];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarPage');
  }

}
