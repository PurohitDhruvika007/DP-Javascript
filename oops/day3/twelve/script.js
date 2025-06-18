// Define a base class `Vehicle` with private attributes `model` and `speed`. Implement public member functions for setting and getting these attributes. Derive two classes, `Car` and `Bike`, from the `Vehicle` class. Implement methods to calculate the time taken for a certain distance based on the speed of each vehicle. Demonstrate abstraction by calling the time calculation methods for both `Car` and `Bike`.

class Vehicle //create base class name as Vehicle.and create heirarchical way class(single parent-> multiple child.)
{
    #model;//create an private attribute name as #model where (#) is used to make attributes private.
    #speed;//create an private attribute name as #speed.
    #time;//create an private attribute name as #time.
    constructor(model,speed,time)//create an special method name as constructor(no need to call this method) with parameter model,speed and time.
    {
        this.#model=model;//assign the value of local attribute(model) to global attribute(this.#model) where this is used to identify global variable.
        this.#speed=speed;//assign the value of local attribute(speed) to global variable(this.#speed).
        this.#time=time;//assign the value of local attribute(time) to global attribute(this.#time).
    }
    display()//create an method name as display to display the data(model,speed and time).
    {
        document.writeln("model is ",this.#model,"<br>");//show the model of te vehicle
        document.writeln("speed is ",this.#speed,"<br>");//show the speed of the vehicle
        document.writeln("time is ",this.#time,"<br>");//show the time taken to travel certain distance with these speed.
    }
}

class Car extends Vehicle//create an derive(child) class name as Car.
{
    constructor(model,speed,distance)//create an constructor in Car class with all parameters like model,speed and distance.
    {
        super(model,speed,distance/speed);//use of super keyword to call constructor or method of parent class and pass value like model,speed and time(distance/speed).
    }
}
class Bike extends Vehicle//create an another derive class name as Bike.
{
    constructor(model,speed,distance)//create an another constructor with parameter like model,speed and distance.
    {
        super(model,speed,distance/speed);//use super keyword and pass value like model,speed amd time(distance/speed).
    }
}

const car=new Car("kia sonet",60,120);//create an object name as (car) to access the class with new keyword and pass the arguments to constructor.
car.display();//with object and model you can dispay details
const bike=new Bike("R15",100,150);//create an anoothe object name as bike to access another class(Bike) with new keyword and pass arguments.
bike.display();//use object with method to display details.