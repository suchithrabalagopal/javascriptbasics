function add(a,b){
    return new Promise((resolve)=>{
        setTimeout(()=>{ resolve(a+b) },1000);
    })
}
async function calculate() {
    let result = await add(10,20)
    console.log(result)
}
calculate()

//Seeing the calculate function call, inteprator will search for calculate
//function, so it sees keyword async; then it will check for keyword 
//await and then it sees add(10,20). Now intepretor will search for 
//function add so control goes to line 1.
//Now interpretor reaches line 2 and sees Promise - technique used in js to store future value
//setTimeout function is inbuild function to give a pause for our execution
//await is always expecting a Promise => gives a future result
//When using async await - internally or externally a promise needs to be returned
//How did using promise make the execution asynchronous ?? Code can exist with Promise alone but await is always accompanied by Promise
//where will the execution start - As soon as intepritetor sees Promise, control goes to line 6 and on seesing 
//astnc control goes to line 10

