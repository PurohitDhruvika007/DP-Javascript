const container = $("#contain");
let Close = $("#close");
let isClose=false;

container.hide();

Close.click(()=>{
    container.hide();
    isClose=true;
});

setTimeout(()=>{
    if(!isClose)
    {
        container.show();
    }
},5000);


