function divide(a,b){
    try{
        if(b === 0){
            throw new Error();            
        }
        let result = a/b
        console.log(result)
        
    }
    catch(err){
        console.log("Division by Zero is not possible")
    }
    
}

divide(20,10)

//On seeing the throw keywork intepritor will check for catch keyword 
//should we write catch soon after the try ? How do we identify the corresponding catch
//When i give another number im not getting result

function verifyValue(a){
try{
if (a===0){
throw new Error("Invalid data")

}
else if (a===1){
throw new error("1 is not allowed")
}
else{
console.log(a)
}
}
catch(err){
console.log(err.message)
}
}

verifyValue(1)