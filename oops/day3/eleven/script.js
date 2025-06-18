// Define a base class `Shape` with private attributes `color` and `area`. Implement public member functions for setting and getting the color and calculating the area. Derive two classes, `Circle` and `Rectangle`, from the `Shape` class. Implement methods to calculate the area specific to each shape. Demonstrate abstraction by calling the area calculation methods for both `Circle` and `Rectangle`.
class Shape //create an base class name as Shape.
{
    #color;//create an private attribute name (#color) where # is used to make attributes private.
    #area;//create private attribute name as (#area).
    constructor(color,area)//create an special method name as constructor with parameters(color,area).
    {
        this.#color=color;//assign the value of local variable(color) to global variable(this.#color) where this is used identify global variable.
        this.#area=area;//assign the value of local variable(area) to global variable(this.#area).
    }
    getColor()//create an method name as (getColor) to show the color of the shape.
    {
        document.writeln("color is ",this.#color,"<br>");//used to show the color of shape.
    }
    getArea()//create an method name as getArea used to show the area of the shape.
    {
        document.writeln("area is ",this.#area,"<br>");//show the area of the shape.
    }
}
class Circle extends Shape //create an derived class name as (Circle) from base class(Shape) using extends (used to inherit/connect one class to another class) keyword.
{
    constructor(color,radius)//create an special method constructor(no need to call these method it is call when object is created) with parameters(color and radius).
    {
        super(color,3.14*(radius*radius));//(super keyword is used to calls parent constructor or method) with parameter(color,area).
    }
}
class Rectangle extends Shape //create an derived class name as (Rectangle) from base class(Shape) using extends keyword.
{
    constructor(color,length,width)//create an special method name as constructor with parameters(color,length,width) for finding area of rectangle.
    {
        super(color,length*width);//use super to call parent constructor and pass value of color and area.
    }
}
const circle=new Circle("blue",3);//create an object(circle) with using new keyword and passing class(Circle) you can access class with arguments(color,radius);
circle.getArea();//with object and method have area of circle.
circle.getColor();//with object and method have color of circle.

const rectangle=new Rectangle("red",5,6);//create an object(rectangle) with using new keyword passign class(Rectangle) you can access class with argument(color,length,width).
rectangle.getArea();//with object and method have area of rectangle.
rectangle.getColor();//with object and method have color of rectangle.