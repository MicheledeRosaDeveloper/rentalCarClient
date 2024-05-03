import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rental-car-client';
  isLogged:boolean = false;
  isUserLoggedIn(): boolean {
    this.isLogged =  sessionStorage.getItem('userID') !== null && sessionStorage.getItem('userID') !== undefined && sessionStorage.getItem('userID') !== '' && sessionStorage.getItem('role') !== null && sessionStorage.getItem('role') !== undefined && sessionStorage.getItem('role') !== '';
    return this.isLogged;
  }
}
