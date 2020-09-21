import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CarrinhoService {

  items = [];

  constructor(
    private http: HttpClient
  ) { }

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

  getShippingPrices(){
    return this.http.get('/asserts/getShippingPrices.json');
  }


}

