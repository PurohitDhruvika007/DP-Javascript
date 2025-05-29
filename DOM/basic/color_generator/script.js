let submit=document.getElementById('submit-btn');
let copy=document.getElementById('copy');

submit.addEventListener('click',()=>{
    let randomNumber=Math.random();
    let random=Math.floor(randomNumber*16777216);
    let color='#'+ random.toString(16);
    submit.textContent =color;
    document.body.style.backgroundColor=color;
});

copy.addEventListener('click',()=>{
    const color_copy = submit.textContent;

    navigator.clipboard.writeText(color_copy)
        .then(() => alert('Copied: ' + color_copy))
        .catch(err => alert('Failed to copy: ' + err));
});