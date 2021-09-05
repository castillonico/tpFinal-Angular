import { Component } from '@angular/core'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tpFinal';

  logOut() { 
    localStorage.removeItem("token");
    console.log("Elimino datos de inicio de sesión")
  }; 

}