import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  labels = ['Name', 'Surname'];
  constructor() { }

  ngOnInit(): void {
  }

}
