import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  arrayUsers: any; 
  displayedColumns = ["_id", "name", "lastName", "phone", "email", "active"]; 
  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.listUsers(); 
  }

  listUsers() {
    this.service.getUsers().subscribe((res) => {
      this.arrayUsers = res;
      console.log(this.arrayUsers)
    });
  }
}
