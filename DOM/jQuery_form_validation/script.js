const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const p = document.getElementById("para");
const emailRegx=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
const passwordRegx=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

submit.addEventListener('click',(event)=>{
    event.preventDefault();
    if(username.value=="" && email.value=="" && password.value=="")
    {
        p.textContent=("* all feild are required");
    }
    else if(!emailRegx.test(email.value) && passwordRegx.test(password.value))
    {
        p.textContent="* email is invalid";
    }
    else if(emailRegx.test(email.value) && !passwordRegx.test(password.value))
    {
        p.textContent="* password is invalid";
    }
    else if(emailRegx.test(email.value) && passwordRegx.test(password.value))
    {
        p.className="text-primary";
        p.textContent="password and email both are valid";
    }
    else if(!emailRegx.test(email.value) && !passwordRegx.test(password.value))
    {
        p.textContent="* password and email both are invalid";
    }
});