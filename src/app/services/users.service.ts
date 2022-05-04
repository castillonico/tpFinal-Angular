import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserComponent } from '../intranet/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  uriBase = "https://frozen-peak-97534.herokuapp.com/";
  headers = new HttpHeaders;
  token: any;
  listUsers = [];
  userActive: any;
  popUp: any;

  constructor(private http: HttpClient, private dialog: MatDialog) { }

  getUsers() {
    this.token = localStorage.getItem("token");
    this.headers = this.headers.set("Token", JSON.parse(this.token));
    console.log("el Token almacenado es: ", this.token);
    console.log("el header queda: ", this.headers);
    const uri = this.uriBase + "users";
    const listUsers = this.http.get(uri, { headers: this.headers });
    return listUsers;
  };

  activeUser(user: any) {
    this.userActive = user;
    this.popUp = this.dialog.open(UserComponent)
  }

  closePopUp() {
    this.popUp.close();
  };

  updateUser(user: any) {
    const uri = this.uriBase + "user" + user._id;
    return this.http.put(uri, user)
  }

  deleteUser(_id: any) {
    this.token = localStorage.getItem("token");
    this.headers = this.headers.set("Token", JSON.parse(this.token));
    const uri = this.uriBase + "user/" + _id;
    console.log("en el service recibimos: ", _id);
    console.log("La uri que vamos a usar es: ", uri);
    this.closePopUp(); 
    return this.http.delete(uri, { headers: this.headers })
  }


}
