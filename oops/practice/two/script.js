// Create a base class Vehicle and child classes Bike and Truck. Inherit and override display methods accordingly.
class Vehicle
{
    constructor(brand,speed)
    {
        this.brand=brand;
        this.speed=speed;
    }
    display()
    {
        document.writeln("brand of vehicle is ",this.brand,"<br>");
        document.writeln("speed of vehicle is ",this.speed,"<br>");
    }
}
class Bike extends Vehicle
{
    constructor(brand,speed)
    {
        super(brand,speed);
    }
}
class Truck extends Vehicle
{
    constructor(brand,speed)
    {
        super(brand,speed);
    }
}
const newBike= new Bike("Yamaha",120);
newBike.display();

const newTruck=new Truck("Tata",80);
newTruck.display();