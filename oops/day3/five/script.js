// Create a class representing a `Book` with attributes like `title`, `author`, and `publishedYear`. Demonstrate the instantiation of objects using array and accessing their attributes.

class Book // create class name as Book.
{
    constructor(title,author,publishedYear) //creat an special method name as constructor with parameters(title,author,publishedYear) to get value of parameters.
    {
        this.title=title; //assign the value of of local variable(title) to global variable(this.title) where (this is used to identify global variable).
        this.author=author; //assign the value of local variable(author) to global variable(this.author).
        this.publishedYear=publishedYear;//assign the value of local variable(publishedYear) to global variable(this.publishedYear).
    }
    display()// create method name as didplay to display title,author and publishedYear.
    {
        document.writeln("title : ",this.title,"<br>"); //show the title of movie
        document.writeln("author : ",this.author,"<br>"); // show the author of movie
        document.writeln("publishedYear : ",this.publishedYear,"<br><br>"); //show the publishedYear of movie.
    }
}

const books=[ //create an object of array
    new Book( "To Kill a Mockingbird","Harper Lee",1960), //crate an first element of object
    new Book( "1984","George Orwell",1949), //create an second element
    new Book( "Pride and Prejudice","Jane Austen",1813), //create an third element
    new Book("Beloved","Jane Austen",1987) //create an forth element.

];

books.forEach((book)=>{ //with object and forEach method perform each element.
    book.display(); //with each element call method display to display all details.
})