import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users: string[] = ['Luis', 'Clara', 'Roberto'];
  name: string = "Jon Carter";
  age: number = 28;
  posts: any = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }

  sayHello() {
    alert('Hello')
  }

  deleteUser(user) {
    for(let i = 0; i < this.users.length; i++) {
      if(user == this.users[i]){
        this.users.splice(i, 1);
      }
    }
  }

  addUser(newUser) {
    this.users.push(newUser.value)
    newUser.value = ''
    return false;
  }

}
