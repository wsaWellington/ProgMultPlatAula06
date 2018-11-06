import { Component } from '@angular/core';

import { CrudPage } from '../crud/crud';
import { PopularidadePage } from '../popularidade/popularidade';
import { GenerosPage } from '../generos/generos';
import { LancamentosPage } from '../lancamentos/lancamentos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CrudPage;
  tab2Root = PopularidadePage;
  tab3Root = GenerosPage;
  tab4Root = LancamentosPage;

  constructor() {

  }
}
