// create a class for Student with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.

class student{
    name;
    age;
    standard;
    school;
    grade;

    display(name,age,standard,school,grade)
    {
        this.name=name;
        this.age=age;
        this.standard=standard;
        this.school=school;
        this.grade=grade;

        document.writeln("name is ",this.name,"<br>");
        document.writeln('age is ',this.age,"<br>");
        document.writeln("standard is ",this.standard,"<br>");
        document.writeln("school is ",this.school,"<br>");
        document.writeln('grade is ',this.grade,"<br>");
    }
}

const megha=new student();
const priya=new student();
const aarti=new student();

megha.display("megha",15,11,"vedant","A+");
document.writeln("<br>");
priya.display("priya",16,12,"vedant","A");
document.writeln("<br>");
aarti.display("aarti",13,9,"deep darshan","B");