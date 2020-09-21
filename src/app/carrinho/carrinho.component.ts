import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items;
  checkoutForm;

  constructor( 
    private carrinhoService: CarrinhoService,
    private formBuilder: FormBuilder
  ) { 

    this.checkoutForm = this.formBuilder.group({
      nome:'',
      endereco:'',
    })
   }

  ngOnInit() {

    this.items = this.carrinhoService.getItems();
  }

  onSubmit(custormerData){

    //processo de checkout dos dados aqui
    this.items = this.carrinhoService.limparCarrinho();
    this.checkoutForm.reset();
    console.warn('Seu pedido foi enviado!', custormerData);

  }

}