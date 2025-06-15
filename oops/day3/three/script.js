// Create a class representing a `Movie` with attributes like `title`, `genre`, and `releasedYear`. Demonstrate the instantiation of objects using array and accessing their attributes.

class Movie{ //crete class name as Movie
    constructor(title,genre,releasedYear) //create special methosd name as constructor and pass parameters(title,genre,releasedYear).
    {
        this.title=title; //assign the value of local variable (title) to global variable(this.title) where this is used to identify global variable.
        this.genre=genre; //assign the value of local variable (genre) to global variable (this.genre).
        this.releasedYear=releasedYear; //assign the value of local variable(releasedYear) to global variable(this.releasedYear).
    }
    get()//create get name method used to display details (title,genre,releasedYear).
    {
        document.writeln("title : ",this.title,"<br>");//show the title with global variable.
        document.writeln("genre : ",this.genre,"<br>");//show the genre with global variable.
        document.writeln("releasedYear : ",this.releasedYear,"<br><br>");//show releasedYear wit global variable.
    }
}

const movies=[ //create an array of object name as movies.
    new Movie("Inception", "Sci-Fi", 2010),// call first time class
    new Movie("The Dark Knight", "Action", 2008),//call second time class
    new Movie("Interstellar", "Adventure", 2014),//call third time class
    new Movie("Parasite", "Thriller", 2019)//call forth time class
];

movies.forEach((movie)=>{ //use forEach method to perform each element of array.
    movie.get();// use object with method get to display details.
})