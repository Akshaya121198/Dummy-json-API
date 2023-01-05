import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from './post/IPosts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private _url: string = "https://dummyjson.com/posts"

  constructor(private _httpclient: HttpClient ) { }

  getAllPosts(): Observable<IPosts[]> {
    return this._httpclient.get<IPosts[]>(this._url)
  }
  deletePosts(id: number): Observable<IPosts>{
    return this._httpclient.delete<IPosts>(this._url + "/" + id)
  }
  savePosts(user: any): Observable<any>{
    return this._httpclient.post<any>(this._url + "/add", user)
  }
  editPosts(id: number): Observable<any> {
    return this._httpclient.get<any>(this._url + "/" + id)
  }
  updatePosts(user: any, id: number): Observable<any> {
    return this._httpclient.put<any>(this._url + "/" +id , user)
  }
}
