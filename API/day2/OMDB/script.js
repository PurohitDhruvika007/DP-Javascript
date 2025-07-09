const input=document.getElementById("input");
const button=document.getElementById("button");
const display=document.getElementById("display");
const imgBox=document.getElementById("img-box");
const img=document.getElementById("img");
const content=document.getElementById("content");
const heading=document.getElementById("title");
const plot=document.getElementById("plot");
const extraDetail=document.getElementById("extra_detail");
const award=document.getElementById("award");
const genre=document.getElementById("genre");
const director=document.getElementById("director");
const actor=document.getElementById("actor");
const writer=document.getElementById("writer");
localStorage.getItem("local");

function fetchApi(title)
{
    link="https://www.omdbapi.com/?i=tt3896198&apikey=c77200a9&t="+title;
    localStorage.setItem("local",title);
    fetch(link).then(response=>response.json()).then(movie=>{
        img.src=movie.Poster;
        heading.textContent=movie.Title;
        plot.textContent=movie.Plot;
        if(movie.Award!==undefined)
        {
            award.textContent="Award: "+movie.Award;
        }
        genre.textContent="Genre: "+movie.Genre;
        director.textContent="Director: "+movie.Director;
        actor.textContent="Actors: "+movie.Actors;
        writer.textContent="Writer: "+movie.Writer;
        

    })
}

button.addEventListener('click',()=>{
    let title=input.value;
    fetchApi(title);
    input.value="";
});

const savedTitle=localStorage.getItem("local");
fetchApi(savedTitle);

