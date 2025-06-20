// Bank System Create a class BankAccount with accountNo, holderName, and balance. Create a subclass SavingsAccount that includes interestRate. Implement methods to show balance and calculate interest.

class BankAccount
{
    constructor(accountNo,holderName,balance)
    {
        this.accountNo=accountNo;
        this.holderName=holderName;
        this.balance=balance;
    }
    displayBalance()
    {
        document.writeln("balance in account = ",this.balance,"<br>");
    }
}
class SavingsAccount extends BankAccount
{
    interestRate=8;
    displayInterest()
    {
        super.displayBalance();
        document.writeln("interest amount = ",this.balance*(this.interestRate/100),"<br>");
        document.writeln("balance after interest = ",this.balance+(this.balance*(this.interestRate/100)),"<br>");
    }
}

const bank= new SavingsAccount(1234,"preet",3000);
bank.displayInterest();