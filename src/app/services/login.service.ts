import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  userLogged: any;
  uri = "https://tpfinal-fullstack.herokuapp.com/login";

  constructor(private http: HttpClient) { }

  login(user: any) {
    console.log("los datos a usar son: "); 
    console.log("uri Base: ", this.uri); 
    console.log("el usuario en el servicio es: ", user); 
    return this.http.post<any>(this.uri, user)
  }
}
