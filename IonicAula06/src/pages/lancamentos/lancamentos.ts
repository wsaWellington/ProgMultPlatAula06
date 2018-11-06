import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filme';

/**
 * Generated class for the LancamentosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lancamentos',
  templateUrl: 'lancamentos.html',
})
export class LancamentosPage {

  public filmes: Filme[];

  constructor(public navCtrl: NavController) {

    var l1 = { nome: 'Os Vingadores', diretor: 'Joss Whedon', ano: '2012', img: "../assets/imgs/vingadores.png",popularidade:"",sinopse:"" };
    var l2 = { nome: 'O Exterminador do Futuro 2: O Julgamento Final', diretor: 'James Cameron', ano: '1991', img: "../assets/imgs/exterminador.jpg",popularidade:"",sinopse:"" };
    var l3 = { nome: 'Cisne Negro', diretor: 'Darren Aronofsky', ano: '2010', img: "../assets/imgs/cisneNegro.jpeg",popularidade:"",sinopse:"" };
    var l4 = { nome: 'Hoje Eu Quero Voltar Sozinho', diretor: 'Daniel Ribeiro', ano: '2010', img: "../assets/imgs/hoje-eu-quero-voltar-sozinho.jpg",popularidade:"",sinopse:"" };
    var l5 = { nome: 'Batman: O Cavaleiro das Trevas', diretor: 'Christopher Nolan', ano: '2008', img: "../assets/imgs/batman.jpg",popularidade:"",sinopse:"" };
    var l6 = { nome: 'Expedition Happiness', diretor: 'Felix Starck', ano: '2017', img: "../assets/imgs/expediction.jpg",popularidade:"",sinopse:"" };
    this.filmes = [l1, l2, l3, l4, l5, l6];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LancamentosPage');
  }

}
