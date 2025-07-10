const input=document.getElementById("input");
const button=document.getElementById("button");
const heading=document.getElementById("heading");
const main=document.getElementById("main");
const time=document.getElementById("time");
const id=document.getElementById("id");
const tempre=document.getElementById("temp");
const humid=document.getElementById("humid");
const feel=document.getElementById("feel");
const max=document.getElementById("max");
const min=document.getElementById("min");
const border=document.getElementById("border");
const date=new Date();

function fetchApi(title)
{
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${title}&appid=9c0a45545dde4545cdb4bb6cacf885db&units=metric`).then(response=>response.json()).then(place=>{
        heading.textContent=place.name;
        // main.appendChild(heading);
        id.textContent=place.id;
        time.textContent=(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()+"  " +date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());
        tempre.textContent=place.main.temp+"°C";
        humid.textContent="Humidity: "+place.main.humidity;
        feel.textContent="Fills like: "+place.main.feels_like;
        max.textContent="Max Tempreture: "+place.main.temp_max;
        min.textContent="Min Tempreture: "+place.main.temp_min;
    border.className="border-end pe-3"
        input.value="";
    })
}
button.addEventListener('click',()=>{
    const title=input.value;
    fetchApi(title);
})