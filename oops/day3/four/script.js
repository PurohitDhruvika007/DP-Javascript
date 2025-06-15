//  Define a class named `BankAccount` with private attributes `accountNumber`, `balance`, and `ownerName`. Encapsulate these attributes using appropriate access specifiers. Implement public member functions to credit, debit, and display the balance. Demonstrate encapsulation by interacting with the class through its member functions.

class BankAccount // create class name as BankAccount
{
    #accountNumber;//create private attribute name as #accountNumber where # is used to make attribute private.
    #balance=0;//create private attribute #balance and gave value (0).
    #ownerName;//create private  attribute name as #ownerName.
    credit(accountNumber,amount,ownerName)//create method name as credit(to credit balance in bankAccount) and parameters(accountNumber,amount,ownerName).
    {
        this.#accountNumber=accountNumber;//assign value of local variable(accountNumber) to global variable(this.#accountNumber) in whis this is used to identify global variable
        this.#balance+=amount;//assign value of local variable(amount) to global variable(this.#balance).
        this.#ownerName=ownerName;//assign value of local variable(ownerName) to global variable(this.#ownerName).
        document.writeln("you have credited ",amount,"<br>");//show the amount debited from account.
    }
    debit(accountNumber,amount,ownerName)// create method name as debit(used to debit bank balance) and parmeters (accountNumber,amount,ownerName)
    {
        if(amount<this.#balance)//check whether debit amount is less than total amount.
        {
            this.#accountNumber=accountNumber;//assign value of local variable(accountNumber) to global variable(this.#accountNumber) in whis this is used to identify global variable
        this.#balance-=amount;// assign the value of local variable (amount) to global variable (this.#balance).
        this.#ownerName=ownerName; // assign the value of local varible (ownerName) to global variable(this.#ownerName).
        document.writeln("you have debited ",amount,"<br>"); // show the amount credited from the bank account.
        }
        else//if balance of account is less than amount has been debited.
        {
            alert("you does not have enough balance!");//show that you not have enough balance.
        }

    }
    display(accountNumber)//create method name as display to display the balance in account.
    {
        if(this.#accountNumber==accountNumber)//if gobal account number value equal to local value of account number.
        {
            document.writeln("your balance is ",this.#balance);//show the balance of account number.
        }
        else//emplement if local value of account number is not equal to global value of account number.
        {
            alert("your acoountNumber is wrong");//show that accountnumber is incorrect.
        }
    }
}
let reem= new BankAccount();//create an object name as reem to access bankAccount.
reem.credit(12345,5000,"reem");//with use of object with method (credit) with arguments(accountNumber,amount,ownerName) to credit the balance.
reem.debit(12345,1000,"reem");//with use of object with method (debit) with argument(accountNumber,amount,ownerName) to debit the balance.
reem.display(12345);// with use of object with method (display) with argument(accountNumber) to display the balance.
