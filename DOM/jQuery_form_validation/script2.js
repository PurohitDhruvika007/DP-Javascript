const submit=document.getElementById("submit");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const email_regx=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const password_regx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const output=document.getElementById("output");

submit.addEventListener("click",(event)=>{
    event.preventDefault();
    output.innerHTML="";
    let p=document.createElement("p");
    let div=document.createElement("div");
    div.appendChild(p);
    output.appendChild(div);
    output.className="d-inline-block position-absolute top-0 start-50 translate-middle-x";
    div.className="p-4 py-3 bg-white my-2 border rounded shadow ";
    p.className="text-danger text-center";
    if(username.value=="" && email.value=="" && password.value=="")
    {
        p.textContent="all feild are must reguired!"
    }
    else if(email_regx.test(email.value) && password_regx.test(password.value))
    {
        p.className="text-primary";
        p.textContent= "password and email both are valid!";
    }
    else if(!email_regx.test(email.value) && password_regx.test(password.value))
    {
        p.textContent= "email is invalid!";
    }
    else if(email_regx.test(email.value) && !password_regx.test(password.value))
    {
        p.textContent= "password is invalid!";
    }
    else if(!email_regx.test(email.value) && !password_regx.test(password.value))
    {
        p.textContent= "password and email both are invalid!";
    }
})