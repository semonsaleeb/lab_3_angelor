import { Component } from '@angular/core';
import { Products } from '../interfaces/products';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  selectedItem :Products | undefined;
  products!: Products [] 
  constructor(private product: ProductsService) { }
  
  ngOnInit(): void {
    this.product.getAllProducts().subscribe((product: any) => this.products = product.products);
    
  }
  


}
