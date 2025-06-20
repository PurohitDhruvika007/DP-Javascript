// Mobile Brand Example Create a parent class MobileBrand with brandName. Create child classes Samsung and Apple with additional features. Use method overriding and display all data.

class MobileBrand
{
    constructor(brandName)
    {
        this.brandName=brandName;
    }
    display()
    {
        document.writeln("brand name = ",this.brandName,"<br>");
    }
}
class Samsung extends MobileBrand
{
    constructor(brandName,os,popularModel,specialFeature,security)
    {
        super(brandName);
        this.os=os;
        this.popularModel=popularModel;
        this.specialFeature=specialFeature;
        this.security=security;
    }
    display()
    {
        super.display();
        document.writeln("os = ",this.os,"<br>");
        document.writeln("popular model = ",this.popularModel,"<br>");
        document.writeln("special feature = ",this.specialFeature,"<br>");
        document.writeln("security = ",this.security,"<br>");
    }
}
class Apple extends MobileBrand
{
    constructor(brandName,os,popularModel,specialFeature,security)
    {
        super(brandName);
        this.os=os;
        this.popularModel=popularModel;
        this.specialFeature=specialFeature;
        this.security=security;
    }
    display()
    {
        super.display();
        document.writeln("os = ",this.os,"<br>");
        document.writeln("popular model = ",this.popularModel,"<br>");
        document.writeln("special feature = ",this.specialFeature,"<br>");
        document.writeln("security = ",this.security,"<br>");
    }
}
const samsung= new Samsung("Samsung","Android","Samsung Galaxy S24","Foldable Display, S Pen Support","Knox Security");
const apple = new Apple("Apple","iOS","iPhone 15 Pro Max","Face ID, Dynamic Island","Secure Enclave, Privacy Focused");

samsung.display();
apple.display();