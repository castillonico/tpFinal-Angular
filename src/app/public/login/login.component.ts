import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}) 
 
export class LoginComponent {

  token = "";
  user: any;
  loginForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl()
  }); 

  constructor( private service: LoginService ) { 
  }

  login () { 
    this.user = { 
      email: this.loginForm.value.email, 
      password: this.loginForm.value.password
    };
    this.loginForm.reset(); 
    this.service.login(this.user).subscribe((res: any) => { 
      console.log(res); 
      this.token = JSON.stringify(res.token);
      localStorage.setItem("token", this.token)
    }); 
  }; 

}
