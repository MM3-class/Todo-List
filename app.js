//Selectors
const todoInput = document.querySelector('.todo-input')
const todoAdd = document.querySelector('.todo-add')
const todoList = document.querySelector('.todo-list')
const filterList = document.querySelector('.filter')

//Event Listener
todoAdd.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    event.preventDefault();
    //Create Div for contain the last
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    todoList.appendChild(todoDiv)
    //Create li Element
    const todoItem = document.createElement('li');
    todoItem.innerText= todoInput.value;
    todoItem.classList.add('todo-item');
    todoDiv.appendChild(todoItem);
    //Create Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.innerHTML='<i class ="fas fa-check"></i>';
    todoDiv.appendChild(completeBtn);
    //create Delete Button
    const trashBtn = document.createElement('button');
    trashBtn.classList.add('trash-btn');
    trashBtn.innerHTML='<i class ="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    //Clear Input Value
    todoInput.value = "";
};

function deleteCheck (e) {
    const todo = e.target;
    const item = todo.parentElement;
    
    //Delete todo item
    if(todo.classList[0] === "trash-btn") {
        item.classList.add('fall');
        item.addEventListener('transitionend', () => {
            item.remove();
        })   
    }
    //check todo item
    else if (todo.classList[0] === "complete-btn") {
        
        item.classList.toggle('completed')
    }
}

//FILTER LIST
const listFilter = function (e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {

        switch(e.target.value) {
            case "all":
                todo.style.display = "flex"
            break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
            break;
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
            break;
        }
        
    });
}
filterList.addEventListener('click', listFilter);