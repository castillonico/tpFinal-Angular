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
    email: new FormControl(),
    password: new FormControl()
  }); 

  constructor( private service: LoginService ) { 
  }

  login () { 
    this.user = { 
      email: this.loginForm.value.logEmail, 
      password: this.loginForm.value.logPassword
    }; 
    this.loginForm.reset(); 
    this.service.login(this.user).subscribe((res: any)=> { 
      console.log(res)
    }); 
  }; 

}
