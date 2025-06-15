// Define a class `BankAccount` with private attributes `accountNumber`, `balance`, and `ownerName`. Encapsulate these attributes using appropriate access specifiers. Implement public member functions to credit, debit, and display the balance. Demonstrate encapsulation by interacting with the class through its member functions.

class BankAccount //create class name as BankAccount.
{
    #accountNumber;//create private attribute name as #accountNumber where # is used to make attributes private.
    #balance=0;//create an private attribute name as #balance by giving "0" value.
    #ownerName;//create an private attribute name as #ownerName.
    credit(ownerName,balance,accountNumber)//create an method name as credit with perameters(ownername,balance and accountNumber) to credit the balance in bank account.
    {
        this.#ownerName=ownerName;//assign the value of local variable (ownername) to global variable (this.#ownername) where this is used to identify global variable. 
        this.#balance+=balance;//add and assign the value of local variable(balance) to global variable (this.#balance).
        this.#accountNumber=accountNumber;//assign the value of local variable (accountNumber) to global variable(this.#accountNumber).
        document.writeln("balance credited ",balance,"<br>");//show the balance credited in the account.
    }
    debit(ownerName,balance,accountNumber)//create the method name as debit with parameter(ownerName,balance,accountNumber) to debit the balance from the account.
    {
       if(this.#balance>balance)//if is used to check wheather global variable(this.#balance) is greater than local variable(balance = the amount which has been debited).
       {
         this.#ownerName=ownerName;//assign the value of local variable(ownerName) to global variable(this.#ownerName.)
        this.#balance-=balance;//substract and assign the value of local variable(balance) to global variable(this.#balance).
        this.#accountNumber=accountNumber;//assign the value of local variable(accountNumber) to global variable(this.#accountNumber).
        document.writeln("balance debited ",balance,"<br>");//show the balance has been debited from the bank account.
       }
       else//block of code is executed if balance is not enough in bank account.
       {
        alert("there is no enough balance in bank account");//show that there is no enough balance in account.
       }
    }
    display(accountNumber)//create method name as display to display the balance in account with parameter(accountNumber).
    {
        if(this.#accountNumber==accountNumber)//block of code is executed if value of global variable(this.#accountNumber) is equal to the value of local variable (accountNumber).
        {
            document.writeln("your balance is ",this.#balance,"<br>");//show the balance of account holder in bank.
        }
        else//if there is wrong account number than else code is executed.
        {
            alert("your account Number is incorrect");//show that your account number is incorrect.
        }
    }
}

const bank=new BankAccount();//create an object to exccess the class BankAccount.
bank.credit("reem",5000,12345);//with object and method(credit) to credit the balance from the account.
bank.debit("reem",2000,12345);//with object and method(debit) to debit the balance from the account.
bank.display(12345);//with object and method(display) to display the bank balance in bank account.