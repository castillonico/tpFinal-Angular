import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  user: any;
  uriBase = "http://localhost:3000/users";

  constructor(private http: HttpClient) { };

  registerUser(newName: string, newLastname: string, newPassword: string, newPhone: string, newEmail: string) {
    this.user = JSON.stringify({
      newName: newName,
      newLastname: newLastname,
      newPassword: newPassword,
      newPhone: newPhone,
      newEmail: newEmail,
      active: true
    });
    return this.http.post<any>(this.uriBase, this.user, { responseType : 'json' });
  };
};
