const input=document.getElementById('input');
const button=document.getElementById('button');
const outputBox=document.getElementById('output-box');

let todo_list=["one","two","three","four"];

function show()
{
    outputBox.innerHTML="";
    todo_list.forEach((todo,index)=>{
    const div=document.createElement('div');
    const btndiv=document.createElement('div');
    const p=document.createElement('p');
    const delButton=document.createElement('button');
    const editbutton=document.createElement('button');

    div.className="d-flex justify-content-between my-3";
    delButton.className="btn btn-danger mx-2";
    editbutton.className="btn btn-success";

    p.textContent=todo;
    delButton.textContent="Delete";
    editbutton.textContent="update";

    delButton.addEventListener('click',()=>{
        deletelm(index);
    });

    editbutton.addEventListener('click',()=>{
        edit(index);
    });

    btndiv.appendChild(delButton);
    btndiv.appendChild(editbutton);

    div.appendChild(p);
    div.appendChild(btndiv);

    outputBox.appendChild(div);
    });
}

function deletelm(index)
{
    todo_list.splice(index,1);
    show();
}

function edit(index)
{
    input.value = todo_list[index];
    todo_list.splice(index,1);
}

button.addEventListener('click',()=>{
    const value=input.value;
    todo_list.push(value);
    show();
    input.value="";
});
