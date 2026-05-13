class Parent{
    greet():void
    {
        console.log("Hi")
    }
    greetings():void
    {
        console.log("Welcome") 
    }
}

class child extends Parent{
    greet():void
    {   
        super.greet()           //to access the function from parent class, this keyword cannot be used when function names are same, else we can use the this keyword
        console.log("Hello")
        super.greetings()
    }
}

let obj = new child()
obj.greet()


