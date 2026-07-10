import { createTodo } from "./dataController.js";
import { editTodoDetails } from "./dataController.js";
import { createTodoContainer } from "./todo-component.js";

let todoBeingEdited = null
export const setTodoBeingEdited = (value) => todoBeingEdited = value

function closeDialog(dialog) {
    dialog.close();
    if(dialog.querySelector('form')) {
        dialog.querySelector('form').reset()
    }
}

const newTodoDialog = document.querySelector('#new-todo-dialog');
const editTodoDialog = document.querySelector('#edit-todo-dialog');

export const showEditTodoDialog = () => editTodoDialog.showModal()

const closeDialogButtons = document.querySelectorAll('.close-dialog-button');
[...closeDialogButtons].forEach(button => {
    button.addEventListener('click', (event) => {
        const dialog = document.querySelector(`#${button.dataset.dialogId}`);
        closeDialog(dialog)
    });
});

const newTodoForm = document.querySelector('#new-todo-form');
newTodoForm.addEventListener('submit', handleNewTodoSubmit);

const editTodoForm = document.querySelector('#edit-todo-form');
editTodoForm.addEventListener('submit', handleEditTodoSubmit)

export function toggleDescriptionDisplay(description) {
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
    // newTodoDialog.close();  
    const title = document.querySelector('#todo-title').value;
    const description = document.querySelector('#todo-description').value;
    const dueDate = document.querySelector('#todo-due-date').value;
    const priority = document.querySelector('#todo-priority').value;
    createTodo(title, description, dueDate, priority);
    closeDialog(newTodoDialog)
};

function handleEditTodoSubmit(event) {
    event.preventDefault();
    const title = document.querySelector('#edited-todo-title').value;
    const description = document.querySelector('#edited-todo-description').value;
    const dueDate = document.querySelector('#edited-todo-due-date').value;
    const priority = document.querySelector('#edited-todo-priority').value;
    editTodoDetails(todoBeingEdited, title, description, dueDate, priority);
    closeDialog(editTodoDialog)
    todoBeingEdited = null
};

export function setEditTodoFormValues(title, description, dueDate, priority) {
    document.querySelector('#edited-todo-title').value = title; 
    document.querySelector('#edited-todo-description').value = description || '';
    document.querySelector('#edited-todo-due-date').value = dueDate;
    document.querySelector('#edited-todo-priority').value = priority;
};