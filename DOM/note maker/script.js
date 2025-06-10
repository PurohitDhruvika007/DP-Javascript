const input=document.getElementById('input');
const add=document.getElementById('add');
const cancel=document.getElementById('cancel');
const outputBox=document.getElementById('output-box');
const inputHead=document.getElementById('input-head');

let note_list=[];
let header_list=[];

function show()
{
    outputBox.innerHTML="";
    note_list.forEach((note,index)=>{
        let Div=document.createElement('div');
        let head=document.createElement('h3');
        let p=document.createElement('p');
        let btnDiv=document.createElement('div');
        let updateBtn=document.createElement('button');
        let deleteBtn=document.createElement('button');

        head.textContent = header_list[index];
        p.textContent=note;
        updateBtn.textContent="Update";
        deleteBtn.textContent="Delete";

        updateBtn.className="btn btn-danger me-2";
        btnDiv.className="d-flex justify-content-center";
        deleteBtn.className="btn btn-success";
        Div.className="bg-white d-inline-block p-3 mb-3 me-3 border rounded";
        outputBox.className="d-flex w-75 mx-auto flex-wrap mb-3";

        updateBtn.addEventListener('click',()=>{
            update(index);
        });

        deleteBtn.addEventListener('click',()=>{
            deletelm(index);
        });

        btnDiv.appendChild(updateBtn);
        btnDiv.appendChild(deleteBtn);

        Div.appendChild(head);
        Div.appendChild(p);
        Div.appendChild(btnDiv);

        outputBox.appendChild(Div);
    });

}

function deletelm(index)
{
    note_list.splice(index,1);
    header_list.splice(index,1);
    show();
}

function update(index)
{
    input.value=note_list[index];
    inputHead.value=header_list[index];
    note_list.splice(index,1);
    header_list.splice(index,1);
}

add.addEventListener('click',()=>{
    let value=input.value;
    let headValue=inputHead.value;
    header_list.push(headValue);
    note_list.push(value);
    show();
    input.value="";
    inputHead.value="";
});

cancel.addEventListener('click',()=>{
    input.value="";
    inputHead.value="";
});

show();