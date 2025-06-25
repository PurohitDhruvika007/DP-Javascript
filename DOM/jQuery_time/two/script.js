const date=$("#date");
const time=$("#time");
let dateObj=new Date();
setInterval(()=>{
    date.text(dateObj.getDate()+" / "+(dateObj.getMonth()+1)+" / "+dateObj.getFullYear());
    time.text(dateObj.getHours()+" : "+dateObj.getMinutes()+" : "+dateObj.getSeconds());
    dateObj=new Date();
},1000);