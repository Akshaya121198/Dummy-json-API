import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProducts } from './IProducts';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 
 private _url="https://dummyjson.com/products"
  constructor(private _http: HttpClient ) { }
  getAllUsers(): Observable <IProducts[]>{
    return this._http.get<IProducts[]>(this._url)}
  deleteUsers(id: number): Observable<IProducts[]>{
    return this._http.delete<IProducts[]>(this._url+ "/" + id)
  }
  editUsers(id: number):Observable<IProducts[]>{
    return this._http.get<IProducts[]>(this._url+ "/"+ id)
  }

  createProducts(products : any ):Observable<IProducts[]>{
    return this._http.post<any>(this._url+ "/add" , products)
  }
  
  
  updateProducts(products: any,id:number):Observable<any>{
    return this._http.put<any>(this._url+"/" + id ,products)
  }
  }
  

