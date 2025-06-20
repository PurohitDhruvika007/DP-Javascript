// Design a Student class with attributes name, rollNo, grade. Use encapsulation to implement updateGrade() method.

class Student
{
    constructor(name,rollNo,grade)
    {
        this.name=name;
        this.rollNo=rollNo;
        this.grade=grade;
    }
    updateGrade(Update)
    {
        this.grade=Update;
        document.writeln("grade after updation = ",this.grade);
    }
}
const dipak=new Student("dipak",15,"B");
dipak.updateGrade("A");