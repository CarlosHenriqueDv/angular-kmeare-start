import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.http.get('/assets/shipping.json');
  }


}

