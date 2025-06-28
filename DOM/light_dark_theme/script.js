mode=document.getElementById("mode");
content=document.getElementById("content");
function theme(color)
{
    if(color)
    {
        document.body.style.backgroundColor="rgb(5, 5, 34)";
        document.body.style.color="whiteSmoke";
        content.style.backgroundColor="rgb(5, 5, 34)";
        mode.style.color="whiteSmoke";
        mode.innerHTML="&#x2600;";
    }
    else
    {
        document.body.style.backgroundColor="whiteSmoke";
        document.body.style.color="rgb(5, 5, 34)";
        content.style.backgroundColor="whiteSmoke";
        mode.style.color="rgb(5, 5, 34)";
        mode.innerHTML=" &#x263D;";
    }
}
let color = localStorage.getItem("theme") === "dark" ? true : false;

theme(color);
mode.addEventListener('click',()=>{
    color=!color;
    theme(color);
    localStorage.setItem("theme", color ? "dark" : "light");
});