// Define a class `Person` with private attributes `name`, `age`, and `address`. Encapsulate these attributes using getter and setter methods. Implement a parameterized constructor for the `Person` class. Create N number of objects using this constructor and display the details.

class Person{ //create an class name as person.
    #name;//create an private attribute name as #name where # is used to make attributes private.
    #age; //create an private attribute name as #age.
    #address;//create an private attribute name as #address.
    constructor(name,age,address)//create an special method name as constructor with parameters(name ,age,address).
    {
        this.#name=name; //assign the value of local variable(name) to global variable(this.#name).
        this.#age=age; //assign the value of local variable(age) to global variable(this.#age).
        this.#address=address; //assign the value of local variable(address) to global variable(this.#address).
    }
    display()//cretae an method name as display to display name ,age and address.
    {
        document.writeln("name is ",this.#name,"<br>");//show the name of person.
        document.writeln("age is ",this.#age,"<br>");//show the age of person
        document.writeln("address is ",this.#address,"<br><br>");//show the address of person
    }
}
p1=new Person("John Smith",30,"123 Main Street, Anytown, USA");//create first object name as p1 to access class(person) with argument in constructor.
p2=new Person("Emily Davis",25,"456 Oak Avenue, Somecity, CA"); //create second object name as p2 to access class(person).
p3=new Person("Michael Brown",40,"789 Pine Road, Othertown, NY");//create third object name as p3 to access class(person).

p1.display();//with first object and method(dispay) to display details.
p2.display();//with second object and method(display) to display details.
p3.display();//with third object and method(display) to display details.
