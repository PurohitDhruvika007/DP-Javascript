// Animal Hierarchy Class Animal with method eat(). Subclass Dog and Cat add bark() and meow() respectively. Demonstrate Hierarchical Inheritance.

class Animal
{
    constructor(food)
    {
        this.food=food;
    }
    eat()
    {
        document.writeln("eat = ",this.food,"<br>");
    }
}
class Dog extends Animal
{
    constructor(food,voice)
    {
        super(food);
        this.voice=voice;
    }
    bark()
    {
        super.eat();
        document.writeln("voice = ",this.voice,"<br>");
    }
}
class Cat extends Animal
{
    constructor(food,voice)
    {
        super(food);
        this.voice=voice;
    }
    meow()
    {
        super.eat();
        document.writeln("voice = ",this.voice,"<br>");
    }
}

const dog = new Dog("dog food","bhau!");
dog.bark();
const cat =new Cat("cat food","meow!");
cat.meow();