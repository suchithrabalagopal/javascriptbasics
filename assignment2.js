let sum = 0
let limit = 10
for (i = 1; i <= limit; i++){

    sum = sum + i
    
}
console.log( sum )

for (i = 1; i <= 50; i++)
{
    if (i % 3 == 0)
    {
        console.log(i + "- Fizz")
    }
    else if (i % 5 == 0)
    {
        console.log(i + "- Buzz")
    }
    else if ( i % 3 == 0 && i % 5 == 0)
    {
        console.log(i + "- FizzBuzz")
    }
}