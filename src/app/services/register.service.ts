import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  uriBase = "http://localhost:3000/users";

  constructor(private http: HttpClient) { };

  registerUser(user: any) {
    return this.http.post<any>(this.uriBase, user, { responseType : 'json' });
  };
};
