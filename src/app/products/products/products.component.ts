import { Component,OnInit } from '@angular/core';
import {  IProducts } from '../IProducts';
import { ProductsService } from '../products.service';
import { NgForm} from '@angular/forms'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products: IProducts[] = [] as IProducts[];

 id: number=0;
 title!: string;
 description!: string;
 price!: number; 

 constructor( private _productsservice: ProductsService ){}
  ngOnInit(): void {
    this._productsservice.getAllUsers().subscribe((posts: any) =>{
      this.products=posts.products;
    })
  }
  deleteUsers(id:number): void{
    alert(id)
    let c:any=confirm("Are you sure you want to delete ? ")

    if(c)
    {
      this._productsservice.deleteUsers(id).subscribe((res:any)=>{
        let index=this.products.findIndex(u=>u.id==id)
        this.products.splice(index,1)
        alert(" user has been deleted ")
      })
    }
    }

    editUsers(id: number):void{
      this._productsservice.editUsers(id).subscribe((res: any) =>{
        if(res){
          this.id= res.id;
          this.title= res.title;
          this.description=res.description;
          this.price= res.price;
        }
        else{
          alert("no user found")
        }
    })
  }

  createProducts(f:NgForm):void{

    this._productsservice.createProducts(f.value).subscribe((res: any)=>{
      this.products.push(f.value)
      alert("Products added successfuly")
    })
  }
  updateProducts(f:NgForm):void{
    if(this.id ==0)
    {
      alert("user not found")
    }
      this._productsservice.updateProducts(f.value, this.id).subscribe((products:any)=>{
      let index=this.products.findIndex(u=>u.id == this.id)
      this.products[index] = products; 
      alert("Products updated successfully")
    })
  
  }

}
