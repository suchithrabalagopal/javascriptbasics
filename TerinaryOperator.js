var a = 10
var b = 20
var c = 30
let res =  (a >= 5 && a <= 20 ) ? "Within Limit" : "Outside Limit"
//console.log(res)

let largest = (a > b && a > c) ? a :
              (b > a && b > c) ? b : c 

console.log(largest)