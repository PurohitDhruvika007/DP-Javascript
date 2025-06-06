const inputBox=document.getElementById('input_box');
const input=document.getElementById('input');
const button=document.getElementById('button');
const outputBox=document.getElementById('output-box');

let todo_list=["one","two","three","four"];

function show()
{
    outputBox.innerHTML="";
    todo_list.forEach((todo,index)=>{
        const div=document.createElement('div');
    const p=document.createElement('p');
    const delButton=document.createElement('button');

    div.className="d-flex justify-content-between my-3";
    delButton.className="btn btn-danger";

    p.textContent=todo;
    delButton.textContent="Delete";

    div.appendChild(p);
    div.appendChild(delButton);

    outputBox.appendChild(div);
    });
}

button.addEventListener('click',()=>{
    const value=input.value;
    todo_list.push(value);
    show();
    input.value="";
});
