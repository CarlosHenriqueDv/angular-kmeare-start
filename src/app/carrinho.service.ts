import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CarrinhoService {

  items = [];

  constructor() { }

  adicionaNoCarrinho(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  limparCarrinho(){
    this.items = [];
    return this.items;
  }


}

