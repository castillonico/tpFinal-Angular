import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
 
export class LoginComponent {

  user: any;
  loginForm = new FormGroup({
    newEmail: new FormControl(),
    newPassword: new FormControl()
    
  }); 

  constructor( private serviceLogin: LoginService ) { 
  }

  login () { 
    
  }

}
