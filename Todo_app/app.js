//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-input-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
todoList.addEventListener('click', checkTodo);

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
        todo.addEventListener('transitionend', () => {
            todo.remove();
        })
        
    }
}

function checkTodo(e) {
    const item = e.target;

    if(item.classList[0] === 'complete-btn') {
      item.parentElement.classList.toggle('completed');
    }
}