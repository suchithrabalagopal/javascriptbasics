function greet()
{ 
    console.log("Welcome!!")   //statement
}
 greet()
 greet()

//Parametrized functions - to work with dynamic values

function addition(a, b)
{
    //console.log(a + b)
    return a + b            //When you want to do manipulation using the result of the function
}

addition(3, 4)
addition("A" , "B")

var res = addition(3,4)
if(res > 10)
{
    console.log("Valid")
}
else
{
    console.log("Invalid")
}

//Arrow functions - When you need to execute only a single line of code; fucntion defined along with the call

let sumOfNumbers=(c, d) => c + d
console.log(sumOfNumbers(5, 6))
