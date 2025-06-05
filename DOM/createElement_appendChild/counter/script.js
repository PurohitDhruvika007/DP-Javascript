const counter=document.getElementById('counter');
const button=document.getElementById('button');
let count=0;

button.addEventListener('click',()=>{
    count++;
    let span=document.createElement('span');
    span.textContent=" "+count;
    counter.appendChild(span);
});