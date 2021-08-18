import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'; 
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  regForm = new FormGroup ({ 
    email: new FormControl(), 
    password: new FormControl() 
  }); 


  constructor( private serviceLogin: LoginService ) { }

  ngOnInit(): void {
  }
  loginUser () { 

  }
  logOutUser () { 
    
  }

}
