import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { orderstvs, Products } from '../products';




interface Users {
  id: any;
  name: any;
  email: any;
  number: any;
  state: any;
  city: any;
  address: any;
  img: any
  name1: any;
  price: any;
  details: any;
  description: any;
  spectification: any;
  model:any;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  items: orderstvs[] = [];

  addcart(product: any) {
    this.items.push(product);
  }

  getitems() {
    return this.items
  }

  itemscount() {
    return this.items.length;
  }

  clearcart() {
    this.items = [];
    return this.items;
  }


  userurl = 'http://localhost:3000/comments/';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  httpOption = {
    headers: this.headers
  }

  getusers() {
    return this.http.get<Users[]>(this.userurl);
  }

  deleteuser(id: number): Observable<Users> {
    const url = `${this.userurl}/${id}`;
    return this.http.delete<Users>(url, this.httpOption)
  }


  updateuser(user: any): Observable<Users> {
    const url = `${this.userurl}/${user.id}`;
    return this.http.put<Users>(url, user, this.httpOption).pipe(map(() => user))
  }


  getupdateuser(id: number): Observable<Users> {
    const url = `${this.userurl}/${id}`;
    return this.http.get<Users>(url, this.httpOption)
  }


}
