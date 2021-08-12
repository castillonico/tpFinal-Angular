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

  createUser () {
    this.service.registerUser( 
      this.regForm.value.newName, 
      this.regForm.value.newLastname, 
      this.regForm.value.newPassword, 
      this.regForm.value.newPhone, 
      this.regForm.value.newEmail 
      createUser () {
        this.service.registerUser( 
          this.regForm.value.newName, 
          this.regForm.value.newLastname, 
          this.regForm.value.newPassword, 
          this.regForm.value.newPhone, 
          this.regForm.value.newEmail
        ).subscribe ( (response:any) => {
          this.userAuth = response; 
          console.log("El usuario se está creando... "); 
          console.log("El usuario es: ", this.userAuth);
        }); 
      };  
    ).subscribe ( (response:any) => {
      this.userAuth = response; 
      console.log("El usuario se está creando... "); 
      console.log("El usuario es: ", this.userAuth);
    }); 
  }; 

}
