class car{
    constructor(engine_type,color,no_of_wheels){
        this.no_of_wheels = no_of_wheels  //storing the parameter value into a reference variable; same nameing is preferred
        this.engine_type = engine_type
        this.color = color
        this.model = "Toyota Sienna"
        this.year = 2025
    }
    printDetails(){
        console.log(this.no_of_wheels)
        console.log(this.engine_type)
        console.log(this.color)
    }
    printModelYear(){
        console.log(this.model)
        console.log(this.year)
    }

}
let car1 = new car("EV","Red",4)     //Creating object for class car; since we are using parameterized constructor pass the parameter
car1.printDetails()
car1.printModelYear()
let car2 = new car("Petrol","White",4) 
car2.printDetails()
car2.printModelYear()