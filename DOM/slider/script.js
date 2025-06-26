// get all id.
const next=document.getElementById("next");
const previous=document.getElementById("previous");
const image=document.getElementById("image");
const auto=document.getElementById("auto");
const stop=document.getElementById("stop");
//create array of images.
const images=[
    "https://avatars.mds.yandex.net/get-mpic/5288539/img_id7831558020096983321.jpeg/orig",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://img.freepik.com/premium-photo/traveler-canoeing-with-rocky-mountain-reflection-maligne-lake-spirit-island-jasper-national-park-canada_49071-2911.jpg?semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/view-heart-shape-with-mountains-lake-landscape_23-2150825097.jpg",
    "https://img.freepik.com/free-photo/digital-lavender-natural-landscape_23-2150538378.jpg"
    ,"https://cdn.stocksnap.io/img-thumbs/280h/enchanting-forest_1CFKSWRR5X.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/048/145/031/small_2x/a-dirt-path-through-a-forest-with-trees-and-grass-with-background-free-photo.jpg"
];
//create index and id.
let index=0;
let id;


function showImage()
{
    image.src=images[index];
}

function NextImage()
{
    if(index<images.length-1)
    {
        index++;
    }
    else
    {
        index=0;
    }
    showImage();
}

function previousImage()
{
    if(index>0)
    {
        index--;
    }
    showImage();
}

function autoPlay()
{
    id=setInterval(()=>{
        NextImage();
    },1000)
}
function stopAutoPlay()
{
    clearInterval(id);
}
next.addEventListener("click",()=>{
    NextImage();
});
previous.addEventListener("click",()=>{
    previousImage();
});
auto.addEventListener("click",()=>{
    autoPlay();
});
stop.addEventListener("click",()=>{
    stopAutoPlay();
});
