import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegisterService { 

  user: any; 
  uriBase = "https://api-node-express-fullstack.herokuapp.com/users"; 

  constructor( private http: HttpClient ) { }

  registerUser(newName: any, newLastname: any, newPassword: any, newPhone: any, newEmail: any) {
    return this.http.post<any>(this.uriBase, 
      { 
        user: { 
          newName: newName, 
          newLastname: newLastname, 
          newPassword: newPassword, 
          newPhone: newPhone, 
          newEmail: newEmail
        }
      })
  }

  
}
