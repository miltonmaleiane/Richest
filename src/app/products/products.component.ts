import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  fortune: number =9800
 constructor( ){}
prod: Product = {
  name: "Burger",
  price: 45,
  
}

buy(){
  this.fortune = this.fortune - this.prod.price
}
}
