// Create a Person class with a method greet(). Create a Student class that extends Person and adds a method study(). Use both methods on a Student object.

class Person
{
    greet()
    {
        document.writeln("namaste !! <br>");
    }
}
class Student extends Person
{
    study(standard)
    {
        document.writeln("studing in ",standard,"standard <br>");
    }
}
const om=new Student();
om.greet();
om.study(5);