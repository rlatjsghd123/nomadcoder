const todosForm = document.querySelector("#todolist_form");
const todosInput = document.querySelector("#todolist_form input")
const todosUl = document.querySelector(".todo");

let todosArr = [];

function deleteTodos(e){
    const del = e.target.parentElement;
    del.remove();
    todosArr = todosArr.filter((item) => item.id !== parseInt(del.id));
    saveTodos();
}

function saveTodos(){
    localStorage.setItem('todos', JSON.stringify(todosArr));
}

function toDosFunc(inputValue){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    todosUl.appendChild(li);
    li.appendChild(span);
    li.appendChild(button);
    li.id = inputValue.id;
    button.innerText = "X";
    button.addEventListener("click", deleteTodos);
    span.innerText = inputValue.text;
}

function toDos(e){
    e.preventDefault();
    const inputValue =  todosInput.value;
    todosInput.value = "";
    const inputValueObj = {
        id: Date.now(),
        text: inputValue,
    }
    todosArr.push(inputValueObj);
    toDosFunc(inputValueObj);
    saveTodos();
}   

todosForm.addEventListener("submit", toDos);

const saved = localStorage.getItem('todos')

if(saved !== null) {
    const paintTodos = JSON.parse(saved);
    todosArr = paintTodos;
    paintTodos.forEach(toDosFunc);
}  





