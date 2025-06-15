// Create a class `Student` with private attributes `name`, `rollNumber`, and a parameterized constructor. Demonstrate the instantiation of objects using this constructor with help of array.

class Student // create an class name as student.
{
    #name;//create an private attribute name as #name where # is used to create private attributes.
    #rollNumber; //create an private attribute name as #rollNumber.
    constructor(name,rollNumber) // create an special method name as constructor with parameters(name,rollNumber).
    {
        this.#name=name; //assign the value of local variable(name) to global variable(this.#name) where this  is used to identify global variable.
        this.#rollNumber=rollNumber; //assign the value of local variable(rollNumber) to global variable(this.#rollNumber).
    }
    display()//crete method name as display to display name and rollNumber.
    {
        document.writeln("name is ",this.#name,"<br>");//show the name of the student.
        document.writeln("roll number is ",this.#rollNumber,"<br><br>"); //show the name of the roll number.
    }
}

const students= [ //crete an object of array
    new Student("preety",1),// first element of an array
    new Student("reem",2),//second element of an array
    new Student("janat",3),//third elemnet of an array
    new Student("riya",4)//forth element of an array
];

students.forEach((index)=>{//use object with method (forEach) to implement an element one by one.
    index.display(); //use element with method(display) to display all details.
});