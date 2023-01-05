import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProducts } from '../products/IProducts';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {
  character: string=" ";
  id: number=0;
  product!: IProducts;

  constructor( private  _activatedRouter: ActivatedRoute, private _productsservice: ProductsService){}

  ngOnInit(): void {

    this.id= this._activatedRouter.snapshot.params[ "character" ]
    alert(this.id)
    this._productsservice.editUsers(this.id).subscribe((res: any) => {
      this.product = res;
    })
    
  }

}
