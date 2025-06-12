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
            alert("your pin is undefined");
        }
        else
        {
            alert("your pin is wrong");
        }
    }
    withdraw(debit,pin,balance)
    {
        if(this.pin==pin)
        {
            if(balance<this.balance)
        {
            this.balance-=balance;
         document.writeln("you have withdraw ",balance,"<br>");
        document.writeln("your balance after deposit is ",this.balance,"<br>");
        }
         else if(this.pin==undefined)
        {
            alert("your pin is undefined");
        }
        else
        {
            alert("insufficient balance");
        }
        }
        else
        {
            alert("your pin is wrong");
        }
    }
    checkbalance(debit,pin)
    {
        if(this.pin==pin)
        {
            document.writeln("your balance is ",this.balance,"<br>");
        }
         else if(this.pin==undefined)
        {
            alert("your pin is undefined");
        }
        else
        {
            alert("your pin is wrong");
        }
    }
}

const one=new ATM("debit",1234,2000);
one.setpin(2345);
one.checkbalance("debit",2345);
one.deposit("debit",2345,3000);
one.withdraw("debit",2345,1000);