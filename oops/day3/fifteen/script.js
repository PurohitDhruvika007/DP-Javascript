// Define a base class `Shape` with private attributes `color` and `area`. Implement public methods for setting and getting these attributes. Derive two classes, `Circle` and `Rectangle`, from the `Shape` class. Implement methods to calculate the area specific to each shape. Demonstrate abstraction by calling the area calculation methods for both `Circle` and `Rectangle`.
class Shape //create a base class name as Shape.
{
    #color;//create a private attribute name as (#color) where # is ussed to make attributes private.
    #area;// create an private attribute name as (#area).
    constructor(color,area)//create an special method name as constructor with parameter like color and area.
    {
        this.#color=color;//assign the value of local attribute(color) to global attribute(this.#color) where this is used identify global variable.
        this.#area=area;//assign the value of local attribute(area) to global attribute (this.#area).
    }
    getData()//create a public method name as getdata to display color and area.
    {
        document.writeln("color is ",this.#color,"<br>");//used to display color of shape.
        document.writeln("area is ",this.#area,"<br>");//used to display area of shape.
    }
}
class Circle extends Shape//create a derive class name as Circle where extends is used to connect child class to parent class(Shape).
{
    constructor(color,radius)//create method constructor with parameter color and radius.
    {
        super(color,3.14*(radius*radius));//use super keyword to call parent class constructor to child class and pass value for color and area(pie*r*r);
    }
}
class Rectangle extends Shape //create an derive/child class name as Rectangle and connect/inherit it to Shape class.
{
    constructor(color,length,width)//create an method name as constructor with parameters like color,length and width.
    {
        super(color,length*width);//use super keyword to call parent class constructor and pass values of color and area(length*width) of rectangle.
    }
}
const cir=new Circle("pink",3);//create an object name as cir used to access class(Circle)with new keyword and pass arguments for color and radius.
cir.getData();//use object with method to display data.
const rec=new Rectangle("red",4,2);//create an object name as rec used to access class(Rectangle) with new keyword and pass arguments for color,length,width.
rec.getData();//use object with method to display data.