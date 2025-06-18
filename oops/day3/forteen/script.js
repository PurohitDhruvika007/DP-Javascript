// Define a base class `Device` with private attributes `brand` and `powerConsumption`. Implement public methods for setting and getting these attributes. Derive two classes, `Laptop` and `Smartphone`, from the `Device` class. Implement methods to display information specific to each device. Demonstrate abstraction by calling the display methods for both `Laptop` and `Smartphone`.

class Device //create an base class name as Device in heirarcical way(one parent->multiple children).
{
    #brand;//create an private attribute name as (#brand) where # is used to identify private attributes.
    #powerConsumption; //create an private attribute name as (#powerConsumption). 
    constructor(brand,powerConsumption)//create an special method (constructor) with parameters brand and powerConsumption.
    {
        this.#brand=brand;//assign the value of local variable(brand) to global attributes(this.#brand) where this is used to identify the global variable.
        this.#powerConsumption=powerConsumption;//assign the value of local variable(powerConsumption) to global variable(this.#powerConsumption).
    }
    getData()//create an public attribute name as getdata to diplay the data like brand and powerConsumption.
    {
        document.writeln("brand is ",this.#brand,"<br>");//used to display brand of device.
        document.writeln("powerConsumption is ",this.#powerConsumption,"<br>");//used to dispay powerConsumption of device.
    }
}
class Laptop extends Device//create an another derive class name as Laptop with extend(used to connect child class with parent/base class).
{
    constructor(brand,powerConsumption,RAM)//create constructor with parameters brand,powerCinsumption,RAM.
    {
        super(brand,powerConsumption);//use super keyword to call constructor of parent class and pass value of brand and powerConsumption.
        this.RAM=RAM;//assign the value of local attribute (RAM) to global attribute(this.RAM).
    }
    laptopData()//create an public method name as laptopData to display the data.
    {
        super.getData();//using super keyword call public method of parent class to display the data of parent class.
        document.writeln("RAM is ",this.RAM,"<br>");//use to display RAM of your laptop.
    }
}
class Smartphone extends Device//create another child/erive class name as Smartphone with extends(use to connect child class to parent class).
{
    constructor(brand,powerConsumption,camera)//create a constructor with parameters brand,powerConsumption and camera.
    {
        super(brand,powerConsumption);//use super keyword to call parent constructor to child constructor and pass value of brand and powerConsumption.
        this.camera=camera;//assign the value of local attribute(camera) to global attribute(this.camera).
    }
    smartphoneData()//create an public member SmartphoneData to display the details of phone.
    {
        super.getData();//use super keyword to call parent class public method to child class.
        document.writeln("camera is ",this.camera,"<br>");//used to display the camera of smartphone.
    }
}
const hp=new Laptop("hp",45,8);//create an object name as hp to access the Laptop class using new keyword and pass arguments.
hp.laptopData();//call object with public member to display the data of Laptop.
const apple=new Smartphone("apple",18,12);//create an object name as apple to access the class(Smartphone) using new keyword and pass arguments.
apple.smartphoneData();//call object with public method to display the data of smartphone.