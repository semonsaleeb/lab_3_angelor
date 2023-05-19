import { Injectable } from '@angular/core';
import { Products } from '../interfaces/products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems:Products []=[];
  private cartcount = new BehaviorSubject(0);
  
  get cartCount(){
    return this.cartcount.asObservable();
  }
    constructor() { }
  
  addToCart(product: Products){
    product.quantity = 1;
    this.cartItems.push(product);
    this.cartcount.next(this.cartItems.length);
    // console.log(product);
    // console.log(this.cartItems,"added to cart");
  }
  
  getItems(){
    console.log(this.cartItems,"get items");
    return this.cartItems;
  }
  
  removeItem(id:number){
    this.cartItems.splice( this.cartItems.findIndex(a => a.id === id) , 1);
    this.cartcount.next(this.cartItems.length);
  }}
