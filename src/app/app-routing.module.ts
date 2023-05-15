import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegesterComponent } from './regester/regester.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
 { path:"",component:ProductsComponent},
 { path:"products",component:ProductsComponent},
 { path:"login",component:LoginComponent},
 { path:"regester",component:RegesterComponent},
 { path:"product/:id",component:ProductComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
