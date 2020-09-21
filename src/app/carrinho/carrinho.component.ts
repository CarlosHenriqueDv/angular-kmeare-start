import { Component, OnInit } from '@angular/core';

import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items;

  constructor( 
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.items = this.carrinhoService.getItems();
  }

}