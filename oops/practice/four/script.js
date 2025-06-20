// Create a parent class Appliance and a child class Fan which uses inheritance to show name and electricity consumption.

class Appliance
{
    #name;
    #electricityConsumption;
    constructor(name,electricityConsumption)
    {
        this.#name=name;
        this.#electricityConsumption=electricityConsumption;
    }
    display()
    {
        document.writeln("name = ",this.#name,"<br>");
        document.writeln("electricity consumption = ",this.#electricityConsumption,"<br>");

    }
}
class Fan extends Appliance
{
    constructor(name,electricityConsumption)
    {
        super(name,electricityConsumption);
    }
}

const first = new Fan("Crompton Ceiling Fan",75);
first.display();