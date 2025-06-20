//  Create a class Account with attributes username, email, and balance. Implement deposit() and checkBalance() methods.

class Account
{
   #username;
   #email;
   #balance=0

   Data(username,email,balance)
   {
     this.#username=username;
     this.#email=email;
     this.#balance=balance;
   }
   Deposit(username,balance)
   {
    this.#username=username;
    this.#balance+=balance;
    document.writeln("balance deposited = ",balance,"<br>");
    document.writeln("balance after depositing the amount =",this.#balance,"<br>");
   }
   checkDeposit(username)
   {
    if(this.#username==username)
    {
      document.writeln("your current balance is = ",this.#balance,"<br>");
    }
    else
    {
      alert("your username is incorrect");
    }
   }
}
const data=new Account()
data.Data("priya","priya@gmail.com",5000);
data.Deposit("priya",1000);
data.checkDeposit("priya");