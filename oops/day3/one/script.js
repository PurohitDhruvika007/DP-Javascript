// Define a class named Rectangle with private attributes length and width. Implement public member functions to set and get the values of these attributes. Include a method to calculate the area of the rectangle. Create an object of the Rectangle class and demonstrate the functionality of the implemented methods.

class rectangle //crete an class name as rectangle
{
    #length; //create privete attributes name as #length(# is used to make attributes private).
    #width; //create private attribute name as width.
    
    setValues(length,width)//create method name as setValues and pass parameters(length,width) to take input of length and width
    {
        this.#length=length;// assign the value of local variable(length) to global variable(this.#length) where this is used for identify global variable
        this.#width=width; //assign the value of local variable(width) to global variable(this.#width).
    }
    getValues()//create method name as getValues to display values of length and width
    {
        document.writeln("length is ",this.#length,"<br>");// used to show the length by using global variable
        document.writeln("width is ",this.#width,"<br>"); //used to show the width by using global variable
    }
    areaOfRectangle() //create a method name as areaOfRectangle to display area.
    {
        document.writeln("area of rectangle is ",this.#length*this.#width); //used to show the area of rectangle(length*width)
    }
}

const r1=new rectangle(); //create object name as r1 to access rectangle class.
r1.setValues(5,6);  //with object call method setValues and pass arguments in it.
r1.getValues(); //with object call method getValues  to display values.
r1.areaOfRectangle();//with object call areaOfRectangle to display area.