import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Itzel';
  age: number;
  address: {
    street: string;
    city: string;
  };
  hobbies: string[];

  constructor() {
    this.age = 28;
    this.address = {
      street: '229 Baker Street',
      city: 'London'
    };
    this.hobbies = ['swimming', 'read', 'write']
  }
}
