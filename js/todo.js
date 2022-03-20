
const TODOS_KEY = "toDos";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
todoInput.style.top = "25%";
todoInput.style.right = "5%";
todoInput.style.position = "absolute";
todoInput.style.fontSize = "30px";
todoInput.style.fontFamily = "Georgia";

let todos = [];
let todo = "";
let filterVal = "";

function updStoTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function getStoTodos(){
    todos = JSON.parse(localStorage.getItem(TODOS_KEY));
}

function handleInputEvt(event){
    event.preventDefault();
    todo = todoInput.value;

    if (todo === null || todo === ""){
        alert("input something to do !");
        todoInput.focus();
        return;
    }

    todos.push({"id":new Date().getTime(), "val":todo});
    
    updStoTodo();
    paintTodo();

    todo = "";
    todoInput.value = "";
}

function handleDelEvt(event){
    event.preventDefault();

    filterVal = event.target.parentElement.id;
    
    todos = todos.filter(value => {
    return value.id !== parseInt(filterVal);
    });

    updStoTodo();

    event.target.parentElement.classList.add("hidden");
}

function paintTodo(){
    
    getStoTodos();

    if (todos === null){
        todos = [];
        return;
    }

    let newUl = document.createElement("ul");
    newUl.style.top = "30%";
    newUl.style.right = "15%";
    newUl.style.position = "absolute";
    newUl.style.fontSize = "30px";
    newUl.style.fontFamily = "Georgia";
    newUl.id = "todo-list";

    todos.forEach(element => {
        console.log("element:::", element);
        
        const li = document.createElement("li");
        li.id = element.id;
        li.style.color = "white";
        
        const span = document.createElement("span");
        span.innerText = element.val;
        span.style.color = "white";
    
        const button = document.createElement("button");
        button.innerText = "Done";
        button.style.fontSize = "15px";
        button.style.fontFamily = "Georgia";
        button.addEventListener("click", handleDelEvt);
        
        li.appendChild(span);
        li.appendChild(button);

        newUl.appendChild(li);
    });

    const todoList = document.querySelector("#todo-list");
    
    todoList.replaceWith(newUl);
    
}

todoForm.addEventListener("submit", handleInputEvt);
paintTodo();
