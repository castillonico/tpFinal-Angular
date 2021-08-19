import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uriBase = "http://localhost:3000/users"

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log(this.uriBase); 
    return this.http.get(this.uriBase);
  }
}
