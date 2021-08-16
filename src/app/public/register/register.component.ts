import { Component, OnInit } from '@angular/core'; 
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userAuth: any; 
  newUser: any; 
  regForm = new FormGroup ({ 
    newName: new FormControl(), 
    newLastname: new FormControl(),  
    newPassword: new FormControl(), 
    newPhone: new FormControl(),
    newEmail: new FormControl()
  })
  constructor( private service: RegisterService ) { };

  createUser () { 
    let unNombre = this.regForm.value.newName; 
    this.newUser = JSON.stringify({
      newName: unNombre,
      newLastname: this.regForm.value.newLastName,
      newPassword:this.regForm.value.newPassword, 
      newPhone: this.regForm.value.newPhone, 
      newEmail: this.regForm.value.newEmail,
      active: true
    }); 
    console.log(this.newUser); 
    this.service.registerUser ( 
      this.regForm.value.newName, 
      this.regForm.value.newLastname, 
      this.regForm.value.newPassword, 
      this.regForm.value.newPhone, 
      this.regForm.value.newEmail
    ).subscribe((response:any) => { 
      this.userAuth = response; 
      console.log(this.userAuth); 
    });
    
  }; 

}
