// Define a base class `Animal` with private attributes `name` and `sound`. Implement public methods for setting and getting these attributes. Derive two classes, `Dog` and `Cat`, from the `Animal` class. Implement methods to make each animal produce its specific sound. Demonstrate abstraction by calling the sound methods for both `Dog` and `Cat`.

class Animal //create an base class name as Animal in heirarchical way(one parent-> multiple children).
{
    #name;//create an private attribute name as (#name) where # is used to create private attributes.
    #sound;//create an private attribute name as (#sound).
    constructor(name,sound)//create an special method name as constructor with parameter name and sound.
    {
        this.#name=name;//assign the value of local attribute(name) to global attribute(this.#name) where this is used to identify global variable.
        this.#sound=sound; //assign the value of local attribute(sound) to global attribute(this.#sound). 
    }
    getData()//create an public method name as getData to display the name and sound of the animal.
    {
        document.writeln("name is ",this.#name,"<br>");//used to show the name of the animal.
        document.writeln("sound is ",this.#sound,"<br>");//used to show the sound of the animal.
    }
}
class Dog extends Animal//create an derive(child) class name as Dog.
{
    constructor(name)//create an constructor to take parmeter name.
    {
        super(name,"bhao!")//use super keyword to call constructor of parent class and pass values like name and sound("bhao!").
    }
}
class Cat extends Animal //create an another derive class name as Cat.
{
    constructor(name)// create an constructor with parameter name.
    {
        super(name,"meow!")//usign super keyword pass the values like name and sound("meow!").
    }
}

const cat=new Cat("kity");//create an object name as (cat) to access the class(Cat) and pass the argument for name parameter.
cat.getData();//use object with method to dispay the data.
const dog=new Dog("jack");//create an object name as (dog) to access the class(Dog) and pass the arguments for name parameter.
dog.getData();//use object with method to display the data.