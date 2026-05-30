import { deleteTodo } from "./dataController.js";
import { createTodo } from "./dataController.js";
import { editTodoDetails } from "./dataController.js";

const newTodoDialog = document.querySelector('#new-todo-dialog');
const editTodoDialog = document.querySelector('#edit-todo-dialog');

const closeDialogButtons = document.querySelectorAll('.close-dialog-button');
[...closeDialogButtons].forEach(button => {
    button.addEventListener('click', () => {
        const dialog = document.querySelector(`#${button.dataset.dialogId}`);
        dialog.close();
    });
});

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', handleNewTodoSubmit);

const editTodoForm = document.querySelector('#edit-todo-form');
editTodoForm.addEventListener('submit', (event) => {
    const todoId = editTodoForm.dataset.todoId;
    const parentProjectId = editTodoForm.dataset.parentProjectId;
    handleEditTodoSubmit(event, todoId, parentProjectId);
})

function createTodoContainer(todo, parentProjectId) {
    const container = document.createElement('div');
    container.classList.add('todo-container');
    container.dataset.priority = todo.priority;

    const toggleContainer = document.createElement('div');
    const toggleButton = document.createElement('input');
    toggleButton.type = 'checkbox';
    toggleContainer.appendChild(toggleButton);

    const title = document.createElement('h3');
    title.textContent = todo.title;

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const editButton = document.createElement('button');
    buttonsContainer.appendChild(editButton);
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', ()=> {
        editTodoForm.dataset.todoId = todo.id;
        editTodoForm.dataset.parentProjectId = parentProjectId;
        setEditTodoFormValues(todo.title, todo.description, todo.dueDate, todo.priority);
        editTodoDialog.showModal();
    });

    const deleteButton = document.createElement('button');
    buttonsContainer.appendChild(deleteButton);
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', ()=>{
        deleteTodo(todo.id, parentProjectId);
    });

    container.appendChild(toggleButton);
    container.appendChild(title);
    container.appendChild(buttonsContainer);
    container.appendChild(toggleButton);
    return container;
};

function createNewTodoButton() {
    const newTodoButton = document.createElement('button');
    newTodoButton.textContent = '+';
    newTodoButton.addEventListener('click', ()=>{
        newTodoDialog.showModal();
    });
    return newTodoButton;
};

export function loadProject(projectTodos, projectId) {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');
    const newTodoButton = createNewTodoButton();
    contentDiv.appendChild(newTodoButton);
    loadTodos(projectTodos, projectId);
}   

function loadTodos(todosArray, parentProjectId) {
    const contentDiv = document.querySelector('#content');

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');

    todosArray.forEach(todo => {
        const todoContainer = createTodoContainer(todo, parentProjectId);
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

function handleEditTodoSubmit(event, todoId, parentProjectId) {
    event.preventDefault();
    editTodoDialog.close();
    const title = document.querySelector('#edited-todo-title').value;
    const description = document.querySelector('#edited-todo-description').value;
    const dueDate = document.querySelector('#edited-todo-due-date').value;
    const priority = document.querySelector('#edited-todo-priority').value;
    editTodoDetails(todoId, parentProjectId, title, description, dueDate, priority);
};

function setEditTodoFormValues(title, description, dueDate, priority) {
    document.querySelector('#edited-todo-title').value = title; 
    document.querySelector('#edited-todo-description').value = description;
    document.querySelector('#edited-todo-due-date').value = dueDate;
    document.querySelector('#edited-todo-priority').value = priority;
};