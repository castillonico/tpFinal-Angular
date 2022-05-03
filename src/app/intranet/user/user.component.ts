import { Component, OnInit, Output } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() userModified: any;
  user: any;
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.user = this.service.userActive;
    console.log(this.user);
  }

  eraseUser() {
    console.log(this.user);
    this.service.deleteUser(this.user._id).subscribe(res => {
      console.log(res)
    });
    this.service.getUsers();
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



