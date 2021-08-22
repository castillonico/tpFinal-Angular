import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  userLogged: any; 
  urlApi = ""; 

  constructor( private http: HttpClient) { } 

  login (user: any) { 
    

    /*
    this.userLogged = this.http.post (this.urlApi, user); 
    return this.userLogged
    */
  }
}
