import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = "John Doe";
  age:number = 31;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() {
    console.log("constructor")
  }

  ngOnInit() {
    console.log("ngOnInit")
    this.name = "Maciej Bogdański";
    this.age=30;
    this.address = {
      street: "Piękna",
      city: "Warszawa",
      province: "mazowieckie"
    };
    this.hobbies = ["sex", "drugs", "coding", "footbal"];
    this.hello = false;
    this.hello = 1;
  }

  getOlder() {
    this.age++;
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.push(hobby);
    return false;
  }

  deleteHobby(ix) {
    this.hobbies.splice(ix, 1);
  }
}

interface Address {
  street:string,
  city:string,
  province:string
}
