// import { apiKey, var2 } from "./util.js"; //Multipel valuse can be imported this way.
import * as utils from "./util.js"; // Instead of writing individual names you can import similar to kwargs.

console.log("API Key : " + utils.apiKey);

//This is the object declaration with function ~v~
const obj = {
  name: "Ram",
  age: 1000,
  greet() {
    console.log(`Hello ${this.name} are you ${this.age}`);
  },
};

console.log(obj.greet());

//This is another way of using the object structure ~v~
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello ${this.name} are you ${this.age}`);
  }
}

const user1 = new User("Shayam", 500);
user1.greet();
