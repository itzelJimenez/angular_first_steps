import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: string[] = ['Luis', 'Clara', 'Roberto']
  name: string = "Jon Carter";
  age: number = 28;

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
