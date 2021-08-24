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
    newLastName: new FormControl(),
    newPassword: new FormControl(),
    newPhone: new FormControl(),
    newEmail: new FormControl()
  });

  constructor(private service: RegisterService) { };

  createUser() {
    this.newUser = {
      name: this.regForm.value.newName,
      lastName: this.regForm.value.newLastName,
      password: this.regForm.value.newPassword,
      phone: this.regForm.value.newPhone,
      email: this.regForm.value.newEmail,
      active: true
    };
    console.log(this.newUser);
    this.service.registerUser(this.newUser).subscribe((res: any) => {
      console.log(res);
      this.userAuth = res;
      console.log(this.userAuth);
    });
    this.regForm.reset();
  };

}
