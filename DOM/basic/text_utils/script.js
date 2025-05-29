const input=document.getElementById('input');
const text=document.getElementById('text');
const preview=document.getElementById('preview');
const uppercase=document.getElementById('uppercase');
const lowercase=document.getElementById('lowercase');
const words=document.getElementById('words');
const letters=document.getElementById('letters');
const read=document.getElementById('read');
const clear=document.getElementById('clear');

text.addEventListener('click',()=>{
    let newtext=input.value;
    preview.textContent=newtext;
});

uppercase.addEventListener('click',()=>{
    let newtext=input.value;
    preview.textContent=newtext.toUpperCase();
});

lowercase.addEventListener('click',()=>{
    let newtext=input.value;
    preview.textContent=newtext.toLowerCase();
});

letters.addEventListener('click',()=>{
    let newtext=input.value;
    preview.textContent="number of letters : "+newtext.length;
});

words.addEventListener('click',()=>{
    let newtext=input.value;
    let array=newtext.split(' ');
    preview.textContent="number of words : "+array.length;
});

clear.addEventListener('click',()=>{
    input.value=' ';
    preview.textContent=' ';
});
      

read.addEventListener('click',()=>{
    let nexttext=input.value;
    let array=nexttext.split(' ');
    let seconds=array.length*0.25;
    h=Math.floor(seconds/3600);
    m=Math.floor((seconds%3600)/60);
    s=Math.floor(seconds%60);
    preview.textContent=h+":"+m+':'+s;
});

