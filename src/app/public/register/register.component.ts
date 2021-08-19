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
  regForm = new FormGroup({
    newName: new FormControl(),
    newLastname: new FormControl(),
    newPassword: new FormControl(),
    newPhone: new FormControl(),
    newEmail: new FormControl()
  })
  constructor(private service: RegisterService) { };

  createUser() {
    this.newUser = JSON.stringify({
      newName: this.regForm.value.newName,
      newLastname: this.regForm.value.newLastName,
      newPassword: this.regForm.value.newPassword,
      newPhone: this.regForm.value.newPhone,
      newEmail: this.regForm.value.newEmail,
      active: true
    });
    console.log(this.newUser);
    this.service.registerUser(this.newUser).subscribe((response: any) => {
      this.userAuth = response;
      console.log(this.userAuth);
    });

  };

}
