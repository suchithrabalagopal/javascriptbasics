"use strict";
class Parent {
    greet() {
        console.log("Hi");
    }
    greetings() {
        console.log("Welcome");
    }
}
class child extends Parent {
    greet() {
        super.greet(); //to access the function from parent class, this keyword cannot be used when function names are same, else we can use the this keyword
        console.log("Hello");
        super.greetings();
    }
}
let obj = new child();
obj.greet();
