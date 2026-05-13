class student{
    name: string;
    id: number;

    constructor(name: string, id :number)
    {
        this.name = name;
        this.id = id
    }

    display() : void
    {
        console.log(this.name)
        console.log(this.id)
    }
}

var stud = new student("Suchithra", 123)
stud.display();
