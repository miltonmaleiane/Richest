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
buy(price:number,qt:number){
  if(this.fortune - price>= 0)
  {
    this.fortune = this.fortune - price 
  
    for (var i = 0; i < this.product.length; i++)
    {
     this.product[i].buyQt = this.product[i].buyQt +1 ;
    }
  }
 
  //alert(this.quantity)

}
//passing a single product to  a function
Buy (product:Product): void{
  if(this.fortune - product.price>= 0)
  {
    this.fortune = this.fortune - product.price;
    product.buyQt = product.buyQt+1
  }
console.log(product)
}

Sell (product: Product): void{
  if(product.buyQt>0){
    this.fortune = this.fortune + product.price;
    product.buyQt = product.buyQt -1

  }
}
buyQuantity(product:Product): boolean{
if(product.buyQt>0){
  return false;

}else{
  return true

}

}
onKey(event: any){
  console.log(event)
}
times:number = 0
oldTimes:number = 0
getValue(val:string, product: Product){
  // this.oldTimes = this.times
  // if(this.times> this.oldTimes){
  // alert("increased") 
  // }else{
  //   alert("decreased")
    
  // }
  // this.times = parseInt(val)


  // if(this.fortune - (product.price*this.times)>= 0)
  // {
  //   this.fortune = this.fortune - (product.price*this.times);
  //   product.buyQt = product.buyQt+1
  // }
  // console.log(val)

}

}
