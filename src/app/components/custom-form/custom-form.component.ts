import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {

  @Input() formFields!: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
