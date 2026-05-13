"use strict";
class student {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    display() {
        console.log(this.name);
        console.log(this.id);
    }
}
var stud = new student("Suchithra", 123);
stud.display();
