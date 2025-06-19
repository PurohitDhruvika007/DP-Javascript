// Create a Person class that stores name and age. Make age private (use closure or #age) and provide methods to getAge() and setAge() safely.

class Person
{
    name;
    #age;
    setAge(age)
    {
        this.#age=age;
    }
    getAge()
    {
        document.writeln("age is ",this.#age,"<br>");
    }
}
const riya=new Person();
riya.setAge(15);
riya.getAge();
