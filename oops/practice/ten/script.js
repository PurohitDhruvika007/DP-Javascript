// E-commerce Example Create a class User, subclass Customer, and subclass PrimeCustomer. Add special benefits in the lowest subclass.

class User
{
    constructor(userId,name,email)
    {
        this.userId=userId;
        this.name=name;
        this.email=email;
    }
    display()
    {
        document.writeln("user userId is ",this.userId,"<br>");
        document.writeln("user name is ",this.name,"<br>");
        document.writeln("user email is ",this.email,"<br>");

    }
}
class Customer extends User
{
    constructor(userId,name,email,address,OrderHistory,cartItems)
    {
        super(userId,name,email)
        this.address=address;
        this.OrderHistory=OrderHistory;
        this.cartItems=cartItems;
    }
    display()
    {
        super.display();
        document.writeln("user address is ",this.address,"<br>");
        document.writeln("user OrderHistory is ",this.OrderHistory,"<br>");
        document.writeln("user cartItems is ",this.cartItems,"<br>");

    }
}
class PrimeCustomer extends Customer
{
    constructor(userId,name,email,address,OrderHistory,cartItems)
    {
        super(userId,name,email,address,OrderHistory,cartItems);
    }
    display()
    {
        super.display();
        document.writeln("Special Benefits:<br>");
        document.writeln("Free Delivery on all orders<br>");
        document.writeln("Early Access to sales and new products<br>");
        document.writeln("Exclusive Deals only for Prime members<br>");
        document.writeln("Prime Video Access for streaming content<br>");
        document.writeln("Priority Customer Support<br>");
    }
}

const user=new User("U1001","Ravi Sharma","ravi.sharma@example.com");
user.display();
document.writeln("<br><br>");

const customer=new Customer("U1001","Ravi Sharma","ravi.sharma@example.com","123, MG Road, Bangalore",["Laptop", "Headphones", "Books"],["Smartwatch", "USB Cable"]);
customer.display();
document.writeln("<br><br>");

const prime_customer=new PrimeCustomer("U1001","Ravi Sharma","ravi.sharma@example.com","123, MG Road, Bangalore",["Laptop", "Headphones", "Books"],["Smartwatch", "USB Cable"]);
prime_customer.display();
document.writeln("<br><br>");
