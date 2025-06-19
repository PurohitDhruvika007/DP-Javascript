// Create a User class where the password should be private. Add methods to changePassword() and checkPassword().

class User
{
    #password=12345;
    changePassword(password)
    {
        this.#password=password;
    }
    chechPassword()
    {
        document.writeln("your current password is ",this.#password,"<br>");
    }
}
const priya=new User();
priya.chechPassword();
priya.changePassword(65432);
priya.chechPassword();
