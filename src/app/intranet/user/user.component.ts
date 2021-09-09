import { Component, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() userModified: any;
  user: any;
  constructor(private service: UsersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.user = this.service.userActive;
    console.log(this.user);
  }

  eraseUser() {
    console.log(this.user);
    this.service.deleteUser(this.user._id).subscribe(res => {
      const message = JSON.stringify(res);
      this._snackBar.open(message);
    })
  }

  changeEmail() {

  }
  toggleActive() {
    this.user.active = !this.user.active;
  }

  closePopUp() {
    this.service.closePopUp();
  }

}



