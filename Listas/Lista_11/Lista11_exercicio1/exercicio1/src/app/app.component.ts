import { Component } from '@angular/core';
import Produto from './models/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio1';
  public mensagem: string = 'We love to make coffee for you';
  public listaProdutos: Produto[] = new Array<Produto>();

  constructor() {
    this.listaProdutos.push(new Produto("Macaron",
                                       "Pequeno bolo granulado de três ou cinco centímetros de diâmetro",
                                        6.00,
                                        "https://static.itdg.com.br/images/auto-auto/0812d896211493fcb70c2a0454c138ba/macarons-1.jpg"));

    this.listaProdutos.push(new Produto("Brigadeiros Gourmet",
                                        "Caixinha com doze brigadeiros gourmet",
                                        10.00,
                                        "https://www.mamacida.com.br/image/cache/data/brigadeiros-recheados-site-650x650.jpg"));

    this.listaProdutos.push(new Produto("Brownie",
                                        "Sobremesa de chocolate típico americana, acompanhado por soverte",
                                        5.00,
                                        "https://s2-receitas.glbimg.com/ysV0G5KJtS6Ls2ZQpsGPIlubrfI=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/h/R/isTuAVRBundv1RAQg0BA/receita-facil-de-brownie-de-chocolate.jpg"));

    this.listaProdutos.push(new Produto("Cupcake de RedVelvet",
                                        "Pequeno bolinho de red velvet",
                                        6.50,
                                        "https://benditosalgado.com.br/wp-content/uploads/2022/06/Cupcake-RedVelvet.jpg"));
  }
}
