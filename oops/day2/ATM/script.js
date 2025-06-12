class ATM //create an atm name class.
{
    constructor(debit,pin,balance){ //create an constructor with parameters(debit,pin,balance);
        this.debit=debit; //assign the value of local variable to global variable with this(used for global variable) keyword.
        this.pin=pin; //assign the value of local variable to global variable with this(used for global variable) keyword.
        this.balance=balance; //assign the value of local variable to global variable with this(used for global variable) keyword.
    }
    setpin(pin) //create method(setpin) with parameter(pin)
    {
        this.pin=pin; //assign the value of local variable to global variable with this(used for global variable) keyword.
        alert("your pin has been successfully changed"); //use alert keyword to show the message that pin is successfully set.
    }
    deposit(debit,pin,balance) //create method(deposit) with parameters(debit,pin,balance)
    {
        if(this.pin==pin) //using if keyword compare global variable value with local variable value.
        {
            this.balance+=balance; //add value of local variable to global variable and store it to global variable
        document.writeln("you have deposit ",balance,"<br>");// show the value you deposited.
        document.writeln("your balance after deposit is ",this.balance,"<br>");//show your current balance after deposit amount.
        }
        else if(this.pin==undefined)//check weather global variable pin is defined or not.
        {
            alert("your pin is undefined"); //use alert keyword to show the message that your pin is not define.
        }
        else //use else to code if (if) code does not execute.
        {
            alert("your pin is wrong");    //use alert keyword to show show the message that pin is wrong.
        }
    }
    withdraw(debit,pin,balance) //create method(withdraw) with parameters(debit,pin,balance)
    {
        if(this.pin==pin) //using if keyword compare global variable value with local variable value.
        {
            if(balance<this.balance) //using if keyword compare local variable(balance) with global variable(this.balance) and check wheather you have sufficient balance to withdraw money.
        {
            this.balance-=balance; //substract value of local variable to global variable and store it to global variable
         document.writeln("you have withdraw ",balance,"<br>");// show the value you withdrawed.
        document.writeln("your balance after deposit is ",this.balance,"<br>");//show your current balance after withdraw amount.
        }
         else if(this.pin==undefined)//check weather global variable pin is defined or not.
        {
            alert("your pin is undefined");//use alert keyword to show the message that your pin is not define.
        }
        else //else code is executed when you have insufficient amount in your account.
        {
            alert("insufficient balance"); //use alert keyword to show the message that your balance is insufficient.
        }
        }
        else //else code is executed when your pin is wrong.
        {
            alert("your pin is wrong"); //use alert keyword to show the message that your pin is wrong.
        }
    }
    checkbalance(debit,pin) //create method(checkbalance) with parameters(debit,pin)
    {
        if(this.pin==pin) //using if keyword compare global variable value with local variable value.
        {
            document.writeln("your balance is ",this.balance,"<br>"); // show the balance in your account.
        }
         else if(this.pin==undefined)//check weather global variable pin is defined or not.
        {
            alert("your pin is undefined"); //use alert keyword to show the message that your pin is not define.
        }
        else //else code is executed when your pin is wrong.
        {
            alert("your pin is wrong"); //use alert keyword to show the message that your pin is wrong.
        }
    }
}

const one=new ATM("debit",1234,2000); //create object(used to access class value) with variable(one) and store class ATM with all argument("debit",1234,2000).
one.setpin(2345); //object with method(setpin) with pin(2345) to set new pin.
one.checkbalance("debit",2345); //object with method(checkbalance) with debit("debit"),pin(2345) to checkbalance.
one.deposit("debit",2345,3000); //object with method(deposit) with debit("debit"),pin(2345),balance(3000) to deposit amount.
one.withdraw("debit",2345,1000); //object with method(withdraw) with debit("debit"),pin(2345),balance(1000) to withdraw amount.
