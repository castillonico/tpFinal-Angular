import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userAuth: any; 
  regForm = new FormGroup ({ 
    newName: new FormControl(), 
    newLastname: new FormControl(),  
    newPassword: new FormControl(), 
    newPhone: new FormControl(),
    newEmail: new FormControl()
  })
  constructor( private service: RegisterService ) { }

  ngOnInit(): void {
  }

  

}
