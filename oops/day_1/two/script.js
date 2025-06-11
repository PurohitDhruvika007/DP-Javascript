// create a class for Car with minimum 5 attributes, create 3
// defferent objects with meaning ful name, and set and get all
// information.

class car{
    name;
    model;
    year;
    color;
    company;

    display(name,model,year,color,company)
    {
        this.name=name;
        this.model=model;
        this.year=year;
        this.color=color;
        this.company=company;

        document.writeln("name is ",this.name,"<br>");
        document.writeln("model is ",this.model,"<br>");
        document.writeln("year is ",this.year,"<br>");
        document.writeln("color is ",this.color,"<br>");
        document.writeln("company is ",this.company,"<br>");
    }
}
const kia=new car();
const maruti=new car();
const ferari=new car();

kia.display("Seltos", "HTX Plus", 2023, "Black", "Kia Motors");
document.writeln("<br>");
maruti.display("Swift", "VXI", 2022, "Red", "Maruti Suzuki");
document.writeln("<br>");
ferari.display("F8 Tributo", "Coupe", 2024, "Yellow", "Ferrari");