// Create an array of Shape objects (like Circle and Square) and use a forEach() loop to print the area of each shape. This demonstrates polymorphism in action.

class Shape
{
    #name;
    #area;
    constructor(name,area)
    {
        this.#name=name;
        this.#area=area;
    }
    getData()
    {
        document.writeln("area of ",this.#name," is ",this.#area,"<br>");
    }
}
class Circle extends Shape
{
    constructor(radius)
    {
        super("circle",3.14*(radius*radius));
    }
}
class Square extends Shape
{
    constructor(side)
    {
        super("square",side*side);
    }
}

const ArrayObject= [new Circle(3),new Square(4),new Circle(2),new Square(8)];

ArrayObject.forEach((index)=>{
    index.getData();
});

