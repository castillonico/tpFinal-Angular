import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLogged: any;
  baseUrl = "localHost:3000/user/";

  constructor(private http: HttpClient) { }

  login(user: any) {
    let urlApi = this.baseUrl + user.email;
    this.userLogged = this.http.post(urlApi, user);
    return this.userLogged
  }
}
