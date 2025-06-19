// Create a Car class that has brand and model properties. Use a constructor to initialize them. Create a method getDetails() that returns the full name of the car.

class Car{
    constructor(brand,model)
    {
        this.brand=brand;
        this.model=model;
    }
    getDetails()
    {
        document.writeln("brand = ",this.brand,"<br>");
        document.writeln("model = ",this.model,"<br>");
    }
} 
const kia=new Car("kia","sonet");
kia.getDetails();