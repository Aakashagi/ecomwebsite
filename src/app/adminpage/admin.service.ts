import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';




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
}


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }




  adminurl = 'http://localhost:3000/posts/';
  
  


  adminusers(){
    return this.http.get(this.adminurl);
  }


  adminsaveuser(data:any){
    return this.http.post(this.adminurl,data)
  }




  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  httpOption = {
    headers: this.headers
  }

  getusers() {
    return this.http.get<Users[]>(this.adminurl);
  }

  deleteuser(id: number): Observable<Users> {
    const url = `${this.adminurl}/${id}`;
    return this.http.delete<Users>(url, this.httpOption)
  }


  updateuser(user: any): Observable<Users> {
    const url = `${this.adminurl}/${user.id}`;
    return this.http.put<Users>(url, user, this.httpOption).pipe(map(() => user))
  }


  getupdateuser(id: number): Observable<Users> {
    const url = `${this.adminurl}/${id}`;
    return this.http.get<Users>(url, this.httpOption)
  }



}
