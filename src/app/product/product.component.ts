import { Products } from './../interfaces/products';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  selectedProduct:Products | undefined;
  constructor(private activatedRoute :ActivatedRoute, private product: ProductsService) {}

  ngOnInit(){
   this.product.getProductById(this.activatedRoute.snapshot.params['id']).subscribe((product: any) => this.selectedProduct = product);
   console.log(this.selectedProduct);
  }


}
