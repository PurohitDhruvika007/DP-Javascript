// University System Create a class Person, subclass Student, and further subclass ResearchStudent. Use inheritance and encapsulation to display all details.

class Person
{
    constructor(name)
    {
        this.name=name;
    }
    getPerson()
    {
        document.writeln("name is ",this.name,"<br>");
    }
}
class Student extends Person
{
    constructor(name,university)
    {
        super(name);
        this.university=university;
    }
    getStudent()
    {
        super.getPerson();
        document.writeln("university is ",this.university,"<br>");
    }
}
class ResearchStudent extends Student
{
    constructor(name,university,course)
    {
        super(name,university);
        this.course=course;
    }
    getReaserchStudent()
    {
        super.getStudent();
        document.writeln("course is ",this.course,"<br>");
    }
}

const reach= new ResearchStudent("gumnam","patanai","noIdea");
reach.getReaserchStudent();