const input=document.getElementById("input");
const main=document.getElementById("main");
const searchReasult=document.getElementById("search-result");
const showMore=document.getElementById("show-more");
let page=1;
const id="5O97gnnvERlqtmljDQnl1i-qBYrrLsntSxDO-yQaHys";
let value="";

async function display()
{
    const value=input.value;
    api=`https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${id}&per_page=12`;
    
    await fetch(api).then(response=>response.json()).then((data)=>{
         if(page===1)
             {
                 searchReasult.innerHTML="";
             }
        (data.results).forEach(result => {
            
            const image=document.createElement("img");
            image.src=result.urls.small;
            const a=document.createElement("a");
            a.href=result.links.html;
            a.target="_blank";

            image.appendChild(a);
            searchReasult.appendChild(image);
        });
    })
    showMore.style.display="block";
}
main.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    display();
})
showMore.addEventListener("click",()=>{
    page++;
    display();
})