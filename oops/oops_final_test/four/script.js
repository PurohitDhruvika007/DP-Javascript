// Create a Calculator class that hides the internal result property (e.g., using #result). Add methods to add(num), subtract(num), and getResult().

class Calculator
{
    #result=0;
    add(num1,num2)
    {
        this.#result=num1+num2;
    }
    substract(num1,num2)
    {
        this.#result=num1-num2;
    }
    getResult()
    {
         document.writeln("result is ",this.#result,"<br>");
    }
}

const result= new Calculator();
result.add(3,4);
result.getResult();
result.substract(7,3);
result.getResult();