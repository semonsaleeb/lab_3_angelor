import { Component } from '@angular/core';
import { Products } from '../interfaces/products';

import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent {

  selectedProduct:Products | undefined;
  constructor(private activatedRoute :ActivatedRoute, private product: ProductsService) {}

  ngOnInit(){
  //  this.product.getProductById(this.activatedRoute.snapshot.params.id).subscribe((product: any) => this.selectedProduct = product);
  //  console.log(this.selectedProduct);
  }
}
