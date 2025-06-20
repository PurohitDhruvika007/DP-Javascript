// Write a class Library with method addBook(bookName) and displayBooks(). Use encapsulation to manage the book list.

class Library
{
    bookArray=[ "To Kill a Mockingbird",
    "1984",
    "The Great Gatsby",
    "Pride and Prejudice"];

    addBook(bookName)
    {
        this.bookArray.push(bookName);
    }
    displayBooks()
    {
        document.writeln("books = ",this.bookArray,"<br>");
    }
}

const book=new Library();
book.displayBooks();
book.addBook("Moby-Dick");
book.displayBooks();