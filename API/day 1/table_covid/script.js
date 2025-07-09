const tBody= document.getElementById("tBody");
//<tr>
      //<th scope="row">1</th>
      //<td>Mark</td>
      //<td>Otto</td>
      //<td>@mdo</td>
    //</tr>
function display(todos)
{
    todos.map((todo,index)=>{
        tr=document.createElement("tr");
        td1=document.createElement("td");
        td2=document.createElement("td");
        td3=document.createElement("td");
        td4=document.createElement("td");
        td5=document.createElement("td");
        td6=document.createElement("td");
        td7=document.createElement("td");
        
        td1.textContent=index+1;
        tr.appendChild(td1);

        td2.textContent=todo.loc;
        tr.appendChild(td2);

        td3.textContent=todo.confirmedCasesIndian;
        tr.appendChild(td3);

         td4.textContent=todo.confirmedCasesForeign;
        tr.appendChild(td4);

        td5.textContent=todo.discharged;
        tr.appendChild(td5);

        td6.textContent=todo.deaths;
        tr.appendChild(td6);

        td7.textContent=todo.totalConfirmed;
        tr.appendChild(td7);

        tBody.appendChild(tr);
    })

}

function fetchData()
{
    fetch("https://api.rootnet.in/covid19-in/stats/latest").then(response=>response.json()).then((todos)=>{
        display(todos.data.regional);
    })
}
fetchData();