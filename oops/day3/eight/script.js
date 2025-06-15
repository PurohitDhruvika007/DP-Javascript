// Define a class `Car` with private attributes `model`, `year`, and `speed`. Encapsulate these attributes using appropriate access specifiers. Implement public member functions to set and get the values of these attributes. Demonstrate encapsulation by accessing these attributes through the member functions.

class Car //create an class name as Car
{
    #model;//create an private attribute name as #model where # is used to make attribute private.
    #year;//create an private attribute name as #year.
    #speed;//create an private attribute name as #speed.
    setValues(model,year,speed)//create an model name as setvalues to input values to parameters(model,year,speed).
    {
        this.#model=model;//assign values of local variable(model) to global variable(this.#model) where this is used to identify global variable.
        this.#year=year;//assign values of local variable(#year) to global variable(this.#year).
        this.#speed=speed;//assign values of local variable(#speed) to global variable(this.#speed).
    }
    getValues()//create another method getValues to display model,year and speed.
    {
        document.writeln("model is ",this.#model,"<br>"); //show the model of the car
        document.writeln("year is ",this.#year,"<br>");// show the year of the car
        document.writeln("speed is ",this.#speed,"<br>");// show the speed of the car
    }
}
const c1=new Car();//create an object name as c1 to exccess class(Car)
c1.setValues("Koenigsegg Jesko Absolut",2025,"330 mph");//use object and method (setValues) to set the value.
c1.getValues();//use object with method name as (getValues) to get the values.