const input=document.querySelector('#input');
const button=document.querySelector('#button');
const output=document.querySelector('#output');

button.addEventListener('click',()=>{
    let value=input.value;
    let span=document.createElement('span');
    span.textContent= value +" ";
    output.appendChild(span);
    input.value="";
});