// create class for ATM, with checkBalance, withdraw, deposit.

class ATM{
    debit;
    pin;
    balance=5000;
    deposit(debit,pin,balance)
    {
        this.debit=debit;
        this.pin=pin;
        this.balance+=balance;
        document.writeln("balance after deposit is ",this.balance,"<br>");
    }
    withdraw(debit,pin,balance)
    {
        this.debit=debit;
        this.pin=pin;
        this.balance-=balance;
        document.writeln("balance after withdraw is ",this.balance,"<br>");
    }
    checkbalance(debit,pin)
    {
        this.debit+=debit;
        this.pin=pin;
        document.writeln("your balance is = ",this.balance);
    }
}

const atm=new ATM();

atm.deposit("visa",1234,1000);
atm.withdraw("visa",1234,3000);
atm.checkbalance("visa",1234);