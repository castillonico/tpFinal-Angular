import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  arrayUsers: any; 
  constructor(private service: UsersService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.listUsers(); 
  }

  listUsers() {
    this.service.getUsers().subscribe((res) => {
      this.arrayUsers = res;
      console.log(this.arrayUsers)
    });
  }

  detailsUser (user: any) { 
    console.log(user._id); 
    this.service.activeUser(user); 
    const popUp = this.dialog.open(UserComponent); 
    popUp.afterClosed().subscribe(res => { 
      if (res) {
        console.log(res);
      } else {
        console.log("no hubo modificación en el usuario")
      }
    })
  }
}
