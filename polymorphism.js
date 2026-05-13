function add(...num){           //... is called rest parameter - dynamic number of parameters can be accepted by the function
    return num.reduce((t,n) => t+n , 0)    //reduce is a built in function used during array handling, here t's initial value is assigned as 0
}

console.log(add(2,6))
console.log(add(4,5,6))