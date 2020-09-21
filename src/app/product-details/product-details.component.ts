import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  adicionaNoCarrinho(product){
    this.carrinhoService.adicionaNoCarrinho(product);
    window.alert('Você adicionou o produto ao carrinho!')
  }

  constructor( 
    private route: ActivatedRoute,
    private carrinhoService: CarrinhoService,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')]
    })
  }

}