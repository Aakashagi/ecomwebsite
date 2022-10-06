import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderstvs, Products, products } from '../products';





@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  items: orderstvs[]=[];




  addcart(product:any){
    this.items.push(product);
  }

  getitems(){
    return this.items
  }

  itemscount(){
    return this.items.length;
  }

  clearcart(){
    this.items=[];
    return this.items;
  }


  url = 'http://localhost:3000/posts/';
  userurl = 'http://localhost:3000/comments/';
  //  url = '../../app/products';
  


  // users(){
  //   return this.http.get(this.url);
  // }






  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  httpOption = {
    headers: this.headers
  }

  users1(){
    return this.http.get(this.userurl)
  }

  // saveuser(data:any){
  //   return this.http.post(this.url,data)
  // }

  saveuser1(data:any){
    return this.http.post(this.userurl,data)
  }


  // deleteuser(id: number): Observable<any> {
  //   const url = `${this.userurl}/${id}`;
  //   return this.http.delete<any>(url, this.httpOption)
  // }


  // getusers() {
  //   return this.http.get<any[]>(this.userurl);
  // }





}
