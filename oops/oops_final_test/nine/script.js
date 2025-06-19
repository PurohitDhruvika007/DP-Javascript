// Create a Shape class with a method area(). Then create Circle and Square classes that extend Shape and implement their own area() logic.

class Shape
{
    #area;
    #name;
    constructor(area,name)
    {
        this.#area=area;
        this.#name=name;
    }
    displayArea()
    {
        document.writeln("area of ",this.#name, " is ",this.#area,"<br>");
    }
}
class Circle extends Shape
{
    constructor(radius)
    {
        super(3.14*(radius*radius),"circle");
    }
}
class Square extends Shape
{
    constructor(side)
    {
        super(side*side,"square");
    }
}

const circle=new Circle(3);
circle.displayArea();

const square=new Square(2);
square.displayArea();