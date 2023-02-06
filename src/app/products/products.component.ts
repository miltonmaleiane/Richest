import { Component } from '@angular/core';
import { Product } from '../product';
import { PRODUCTS } from '../mock-products';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  product: Product []=[];
  fortune: number =9800
 constructor( private productService: ProductService){}
 ngOnInit():void{
  this.getProducts();
 }
quantity:number =0;
getProducts():void {
  this.productService.getProducts()
  .subscribe(x => {
    console.log(x);
    
    this.product = x});
}
buy(price:number){
  if(this.fortune - (price*this.quantity)>= 0)
  {
    this.fortune = this.fortune - (price *this.quantity)
  }
  alert(this.quantity)

}
}
