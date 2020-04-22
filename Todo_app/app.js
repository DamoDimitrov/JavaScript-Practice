//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-input-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', checkTodo);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
        //Prevent from submitting
    event.preventDefault();

        //Creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

        //Creating li
    const li = document.createElement('li');
    li.innerText = todoInput.value;
    li.classList.add('todo-li');

    todoDiv.appendChild(li);

    saveLocalTodos(todoInput.value);

        //Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

        //Deleted button
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
    deletedButton.classList.add('delete-btn');
    todoDiv.appendChild(deletedButton);
         
        //Append to list
    todoList.appendChild(todoDiv);

    todoInput.value = "";
}

function deleteTodo(e) {
    const item = e.target;
    
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.classList.add('fall');
        removeLocalTodos(todo);

        if(todo.classList.contains("completed")){
            removeCheckedTodos(todo);
        }
        
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        
    }
}

function checkTodo(e) {
    const item = e.target;

    if(item.classList[0] === 'complete-btn') {
        todo = item.parentElement;
        todo.classList.toggle('completed');
        // console.log(todo.classList.contains('completed'));
        if(todo.classList.contains('completed')) {
            saveCheckedTodos(todo);
        } else {
            removeCheckedTodos(todo);
        }
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    const option = e.target.value;

    todos.forEach((todo)  => {
        switch(option) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

// Local Storage manipulations

function saveLocalTodos(todo) {
    let todos = checkLocalStorageTodos();

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
    let todos = checkLocalStorageTodos();

    let checkedTodos = checkCheckedTodos();
    todos.forEach((todo) => {
        //Creating todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

        //Creating li
    const li = document.createElement('li');
    li.innerText = todo;
    li.classList.add('todo-li');

    todoDiv.appendChild(li);

        //Completed button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

        //Deleted button
    const deletedButton = document.createElement('button');
    deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
    deletedButton.classList.add('delete-btn');
    todoDiv.appendChild(deletedButton);

        //Adding completed class if they are so
    if(checkedTodos.indexOf(todo) !== -1) {
        todoDiv.classList.add('completed');
    }
         
        //Append to list
    todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos = checkLocalStorageTodos();
    const todoText = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoText), 1);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function checkLocalStorageTodos() {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

function saveCheckedTodos(todo) {
    let checkedTodos = checkCheckedTodos();

    checkedTodos.push(todo.childNodes[0].innerText);
    localStorage.setItem("checkedTodos",JSON.stringify(checkedTodos));
}

function removeCheckedTodos(todo) {
       let checkedTodos = checkCheckedTodos();
       let todoText = todo.childNodes[0].innerText;
       let todoIndex = checkedTodos.indexOf(todoText);
       checkedTodos.splice(todoIndex, 1);

       localStorage.setItem("checkedTodos", JSON.stringify(checkedTodos));
}

function checkCheckedTodos() {
    let ct;
    if (localStorage.getItem("checkedTodos") === null) {
        ct = [];
    } else {
        ct = JSON.parse(localStorage.getItem("checkedTodos"));
    }

    return ct;
}