h1=$("#head");
n=parseInt(prompt("enter the number = "));
i=1;

setInterval(()=>{
    // if(i<=n)
    // {
    //     h1.text(i);
    //     i++;
    // }
    if(i<=n)
    {
        h1.text(n);
        n--;
    }
},1000);