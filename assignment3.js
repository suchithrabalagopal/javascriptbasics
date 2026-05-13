//Write a function that takes a number and returns whether it is even or odd
/*function oddeven(num)
{
    if(num %2 ==0)
    {
        console.log("Even")
    }
    else
    {
        console.log("Odd")
    }
}

oddeven(5)*/

//Write a function that returns the largest of two numbers

/*function large(a,b)
{
    if (a>b)
    {
        return a
    }
    else
    {
        return b
    }
}

var r = large(7, 8)
console.log("Largest is "+ r)*/

//Create a class Student with properties: name age Create an object and print values.

class Student{
    constructor(name,age)
    {
        this.name = name  
        this.age = age
    }
    printDetails()
    {
     console.log(this.name)
     console.log(this.age)
    }
}
var stud1 = new Student("Suchithra",36)
stud1.printDetails()