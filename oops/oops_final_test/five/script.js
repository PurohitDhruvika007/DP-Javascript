// Create a BankAccount class where balance is private. Add deposit(amount), withdraw(amount), and getBalance() methods. Try to access balance directly (it should not work).

class BankAccount
{
    #balance;
    constructor(balance)
    {
        this.#balance=balance;
    }
    deposit(amount)
    {
        this.#balance+=amount;
        document.writeln("amount been deposited ",amount,"<br>");
    }
    withdraw(amount)
    {
        this.#balance-=amount;
        document.writeln("amount been withdrawed ",amount,"<br>");
    }
    getBalance()
    {
        document.writeln("your current balance is ",this.#balance,"<br>");
    }
}
const priya=new BankAccount(1000);
priya.deposit(1000);
priya.withdraw(500);
priya.getBalance();