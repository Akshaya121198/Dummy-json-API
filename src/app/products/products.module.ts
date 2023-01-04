import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from  '@angular/common/http';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './products.service';
import { ProductViewComponent } from '../product-view/product-view.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
   
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { }
