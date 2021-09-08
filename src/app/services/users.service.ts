import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uriBase = "http://localhost:3000";
  headers = new HttpHeaders; 
  token: any;
  listUsers = []; 
  userActive: any; 

  constructor(private http: HttpClient) { }

  getUsers() { 
    this.token = localStorage.getItem("token");
    this.headers = this.headers.set("Token", JSON.parse(this.token));
    console.log("el dato almacenado es: ", this.token); 
    console.log("el header queda: ", this.headers); 
    const uri = this.uriBase + "/users"; 
    const listUsers = this.http.get(uri, {headers: this.headers});
    return listUsers; 
  }; 

  activeUser (user: any) { 
    this.userActive = user; 
  }

  updateUser (user: any) { 
    const uri = this.uriBase + "/user" + user._id; 
    return this.http.put(uri, user)
  } 
  
  deleteUser (_id: any) { 
    this.token = localStorage.getItem("token");
    this.headers = this.headers.set("Token", JSON.parse(this.token));
    const uri = this.uriBase + "/user/" + _id; 
    console.log("en el service recibimos: ", _id);
    console.log("La uri que vamos a usar es: ", uri); 
    return this.http.delete(uri, {headers: this.headers})
  }
}
