import { Injectable } from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './mock-products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts(): Product[]{
    return PRODUCTS 
  }
}
