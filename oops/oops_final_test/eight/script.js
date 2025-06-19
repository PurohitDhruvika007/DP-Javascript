// Create a Bird class with a method makeSound(). Then create Sparrow and Parrot classes that override the makeSound() method with their unique sounds.

class Bird
{
    #sound;
    #name;
   constructor(sound,name)
   {
    this.#sound=sound;
    this.#name=name;
   }
    makeSound()
    {
        document.writeln(this.#name,"&nbsp;",this.#sound,"<br>");
    }
}
class Sparrow extends Bird
{
    constructor(sound,name)
    {
        super(sound,name);
    }
}
class parrot extends Bird
{
    constructor(sound,name)
    {
        super(sound,name);
    }
}

const voice=new Sparrow("chirp","sparrow");
voice.makeSound();
const voice2=new parrot("squawks","parrot");
voice2.makeSound();