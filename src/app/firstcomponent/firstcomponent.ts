import { Component } from '@angular/core';

@Component({
    selector: "hello-world",
    templateUrl: './firstcomponent.html',
    styleUrls: ['./firstcomponent.css'] 
})
export class HelloWorld {
    title = "Welcome to the jungle";
}