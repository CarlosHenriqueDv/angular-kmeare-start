import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  shippingCosts;

  constructor(
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.shippingCosts = this.carrinhoService.getShippingPrices();
  }

}