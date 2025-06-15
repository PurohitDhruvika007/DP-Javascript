// Define a class named `Employee` with private attributes `name`, `salary`, and `designation`. Encapsulate these attributes using appropriate access specifiers. Implement public member functions to set and get the values of these attributes. Demonstrate the encapsulation concept by accessing these attributes through the member functions.

class Employee //create class name as Employee
{
    #name;//create private attribute (#name) where # is used to make attributes private.
    #salary; //create private attribute(#salary).
    #designation;//crete private attribute(#designation).
    setEmployees(name,salary,designation)//create method name as setEmployees to set(input) values and pass parameters(name,salary,designation).
    {
        this.#name=name; //assign value of local variable (name) to global variable (this.#name) where this is used to identify global variable.
        this.#salary=salary;//assign value of local variable (salary) to global variable(this.#salary).
        this.#designation=designation;//assign value of local variable (designation) to global variable(this.#designation).
    }
    getEmployees()  //create an method getEmployees to display details.
    {
        document.writeln("name of employee is ",this.#name);//show name of the employees.
        document.writeln("<br> salary os employee is ",this.#salary);//show salary of employees.
        document.writeln("<br> designation os employee is ",this.#designation);//show designtion of employees.
    }
}

const emp1=new Employee();//crete object name as emp1 to access class Employee.
emp1.setEmployees("preeti",45000,"HR");//with object and method(setEmployees) set values of employees.
emp1.getEmployees();  //with object and method(getEmployees) display the values of employees.