let x = 10
if (x <=10){
    x = x+1             //NOT a best practise to use globally declared let variable inside the if block
    console.log(x)
}


var y = 10
if (y <=10){
    y = y+1             //This is the best practise as the global variable is declared as var
    console.log(y)
}


function secret(){
    let data = "ABC"
        return function(){
            console.log(data)
        }
}