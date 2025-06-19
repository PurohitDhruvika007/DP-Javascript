// Create a Vehicle class with a method move(). Then create a Bike class that extends Vehicle. Create an object of Bike and call the move() method.

class Vehicle
{
    constructor(total)
    {
        this.total=total;
    }
    move()
    {
        document.writeln("vehicle move ",this.total,"km <br>");
    }
}
class Bike extends Vehicle
{
    constructor(total)
    {
        super(total);
    }
}
const bike=new Bike(20);
bike.move();