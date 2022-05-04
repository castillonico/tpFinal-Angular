import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uriBase = "https://frozen-peak-97534.herokuapp.com/user";

  constructor(private http: HttpClient) { };

  registerUser(user: any) { 
    return this.http.post<any>(this.uriBase, user);
  };
};
