import { deleteTodo } from "./dataController.js";
import { createTodo } from "./dataController.js";
import { editTodoDetails } from "./dataController.js";
import { intlFormatDistance } from "date-fns";  

let todoBeingEdited = null

const newTodoDialog = document.querySelector('#new-todo-dialog');
const editTodoDialog = document.querySelector('#edit-todo-dialog');

const closeDialogButtons = document.querySelectorAll('.close-dialog-button');
[...closeDialogButtons].forEach(button => {
    button.addEventListener('click', (event) => {
        const dialog = document.querySelector(`#${button.dataset.dialogId}`);
        dialog.close();
    });
});

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', handleNewTodoSubmit);

const editTodoForm = document.querySelector('#edit-todo-form');
editTodoForm.addEventListener('submit', handleEditTodoSubmit)

function createTodoContainer(todo) {
    const container = document.createElement('div');
    container.classList.add('todo-container');
    container.dataset.priority = todo.priority;
    
    const topContainer = document.createElement('div')
    topContainer.classList.add('todo-top')

    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add('todo-toggle-container')
    const toggleButton = document.createElement('input');
    toggleButton.type = 'checkbox';
    toggleButton.classList.add('todo-toggle-button')
    toggleContainer.appendChild(toggleButton);


    const titleAndDateContainer = document.createElement('div')
    titleAndDateContainer.classList.add('todo-title-and-date-container')

    const title = document.createElement('button');
    title.classList.add('todo-title');
    title.textContent = todo.title;

    const dueDate = document.createElement('span');
    dueDate.classList.add('todo-due-date')

    titleAndDateContainer.appendChild(title)
    if(todo.dueDate) {
        dueDate.textContent = intlFormatDistance(todo.dueDate, new Date())
        titleAndDateContainer.appendChild(dueDate)
    }

    topContainer.appendChild(titleAndDateContainer)

    let description
    if(todo.description) {
        description = document.createElement('p');
        description.textContent = todo.description ? todo.description : ''
        description.style.display = 'none';
        description.classList.add('todo-description')
        
        title.addEventListener('click', () => {
            toggleDescriptionDisplay(description);
        });
    }

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', ()=> {
        todoBeingEdited = todo
        setEditTodoFormValues(todo.title, todo.description, todo.dueDate, todo.priority);
        editTodoDialog.showModal();
    });

    buttonsContainer.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', ()=>{
        deleteTodo(todo.id, todo.projectId);
    });
    
    buttonsContainer.appendChild(deleteButton);

    topContainer.appendChild(buttonsContainer)

    container.appendChild(toggleContainer)
    container.appendChild(topContainer)
    if(description) {
        container.appendChild(description)
    }
    return container;
};

function toggleDescriptionDisplay(description) {
    description.style.display == 'block' ? description.style.display = 'none' : 
        description.style.display = 'block';
};

function createNewTodoButton() {
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = '+';
    newTodoButton.addEventListener('click', ()=>{
        newTodoDialog.showModal();
    });
    return newTodoButton;
};

export function loadProject(projectTodos) {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');
    const newTodoButton = createNewTodoButton();
    contentDiv.appendChild(newTodoButton);
    loadTodos(projectTodos);
}   

function loadTodos(todosArray) {
    const contentDiv = document.querySelector('#content');

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');

    todosArray.forEach(todo => {
        const todoContainer = createTodoContainer(todo);
        todosContainer.appendChild(todoContainer);
    });
    contentDiv.appendChild(todosContainer);
};

function handleNewTodoSubmit(event) {
    event.preventDefault();
    newTodoDialog.close();  
    const title = document.querySelector('#todo-title').value;
    const description = document.querySelector('#todo-description').value;
    const dueDate = document.querySelector('#todo-due-date').value;
    const priority = document.querySelector('#todo-priority').value;
    createTodo(title, description, dueDate, priority);
};

function handleEditTodoSubmit(event) {
    event.preventDefault();
    editTodoDialog.close();
    const title = document.querySelector('#edited-todo-title').value;
    const description = document.querySelector('#edited-todo-description').value;
    const dueDate = document.querySelector('#edited-todo-due-date').value;
    const priority = document.querySelector('#edited-todo-priority').value;
    editTodoDetails(todoBeingEdited, title, description, dueDate, priority);
    todoBeingEdited = null
};

function setEditTodoFormValues(title, description, dueDate, priority) {
    document.querySelector('#edited-todo-title').value = title; 
    document.querySelector('#edited-todo-description').value = description;
    document.querySelector('#edited-todo-due-date').value = dueDate;
    document.querySelector('#edited-todo-priority').value = priority;
};