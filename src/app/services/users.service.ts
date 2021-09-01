import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uriBase = "http://localhost:3000/users";
  headers = new HttpHeaders; 
  token: any;

  constructor(private http: HttpClient) { }

  
  getUsers() { 
    this.token = localStorage.getItem("token");
    this.headers = this.headers.set("Token", JSON.parse(this.token));
    console.log("el dato almacenado es: ", this.token); 
    console.log("el header queda: ", this.headers); 
    return this.http.get(this.uriBase, {headers: this.headers});
  }
}
