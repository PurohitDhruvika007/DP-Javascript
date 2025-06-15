// Create a class `Laptop` with private attributes `name`, `price`, `processor`, and a parameterized constructor. Demonstrate the instantiation of objects using this constructor.

class laptop //create an class name as laptop.
{
    #name;//crete an private attribute name as #name where # is used to make attributes private.
    #price;//create an private attribute name as #price.
    #processor;//create an private attribute name as #processor.
    constructor(name,price,processor)//create an special method name as constuctor to assign value to global variable with parameters(name,price and processor).
    {
        this.#name=name;//assign the value of local variable(name) to global variable(this.#name) where this is used to identify global variable.
        this.#price=price;//assign the value of local variable(price) to global variable(this.#price).
        this.#processor=processor;//assign the value of local variable(processor) to global variable(this.#processor).
    }
    display()//create an method name as display used to display alll information.
    {
        document.writeln("name is ",this.#name,"<br>"); // show the name of laptop
        document.writeln("price is ",this.#price,"<br>");//show the name of the price
        document.writeln("processor is ",this.#processor,"<br>");//showthe name of the processor.
    }
}
const l1=new laptop("HP Pavilion 15",60000,"AMD Ryzen 5");//create an object name as l1 used to access class(laptop) with arguments.
l1.display();//with object(l1) call method (display) to display name,price,processor.

