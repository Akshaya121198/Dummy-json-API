import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"products", component: ProductsComponent},
  {path:"products/:character", component: ProductViewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
