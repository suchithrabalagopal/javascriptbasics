class A{
    greet()
    {
        console.log("Hi")
    }
    greetings()
    {
        console.log("Welcome")
    }
}

class B extends A{
    greet()
    {   
        super.greet()           //to access the function from parent class, this keyword cannot be used when function names are same, else we can use the this keyword
        console.log("Hello")
        this.greetings()        //super is suggested here while calling functions of parent class
    }
}

let x = new B()
x.greet()


