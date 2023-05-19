import { Component, Input } from '@angular/core';
import { Products } from '../interfaces/products';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Products;

  constructor(private router: Router, private cart:CartService, private products: ProductsService) { 
  
  }
  
  
  productDetails(id: number){
    console.log(id);
    this.router.navigate(['/products',id]);
  }
  
  addTocart(id: number){
    
    const item = this.cart.cartItems.find((product)=>product.id==id)
    if(item){
      console.log(item);
     item.quantity = item.quantity!+1;
    }else{
      this.products.getProductById(id).subscribe((product: any) => this.cart.addToCart(product));
    }
  
  
  }
}
