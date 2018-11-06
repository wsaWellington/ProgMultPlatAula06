import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Filme } from '../../model/filme';

/**
 * Generated class for the FilmeSelecionadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-selecionado',
  templateUrl: 'filme-selecionado.html',
})
export class FilmeSelecionadoPage {
  public filmes:Filme[];

  constructor(public navCtrl: NavController) {
    var l1 = { nome: 'Os vingadores', ano: '2012', diretor: 'John Mayer', sinopse:'Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.', img: '', popularidade: '' };
    this.filmes = [l1];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmeSelecionadoPage');
  }

}
