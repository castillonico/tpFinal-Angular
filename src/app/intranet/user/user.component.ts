import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatSnackBar } from '@angular/material/snack-bar';


import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any;
  res= new EventEmitter; 
  constructor(private service: UsersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.user = this.service.userActive;
    this.active = this.user.active; 
  }

  eraseUser() {
    console.log(this.user);
    this.service.deleteUser(this.user._id).subscribe(res => {
      const message = JSON.stringify(res);
      this._snackBar.open(message);
    })
  }
  active($event: MatSlideToggleChange){ 
    this.res.emit($event); 
    console.log($event); 
  }
}


