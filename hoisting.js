//variable hoisting

//Var hoisting
console.log(x)          // this will consider x as undefined data
//x = x+5
var x = 1               

//Temporal Dead Zone (TDZ)  - Reference Error will result in TDZ

console.log(y)          
//x = x+5
let y = 1    

console.log(z)          
//x = x+5
const y = 1    