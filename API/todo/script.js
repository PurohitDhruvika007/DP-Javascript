function fetchData()
{
    fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json()).then((todos)=>{
        console.log(todos.length);
        todos.map((todo)=>{
            document.writeln(todo.title,"<br>");
        })
    })
}
fetchData();