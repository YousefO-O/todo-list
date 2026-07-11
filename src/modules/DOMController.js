import { createTodo } from "./dataController.js";
import { editTodoDetails } from "./dataController.js";
import { createTodoContainer } from "./todo-component.js";
import { createProject } from "./dataController.js";
import { createProjectComponent } from "./project-component.js";
let selectedProject = null
export const setSelectedProject = (project) => selectedProject = project
let todoBeingEdited = null

const projectsContainer = document.querySelector('#projects-container')
const addProjectButton = document.querySelector('#add-project-button')
const newProjectForm = document.querySelector('#new-project-form')
const newProjectDialog = document.querySelector('#new-project-dialog')
addProjectButton.addEventListener('click', () => {
    const newProjectDialog = document.querySelector('#new-project-dialog')
    newProjectDialog.showModal()
})

newProjectForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const title = document.querySelector('#project-title').value
    createProject(title)
    closeDialog(newProjectDialog)
})

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

export function loadProjects(projectsArray) {
    projectsContainer.replaceChildren('')
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('')
    if(projectsArray.length == 0) return
    projectsArray.forEach(project=>{
        const projectComponent = createProjectComponent(project)
        projectsContainer.appendChild(projectComponent)
    })
}

export function loadProject(project) {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');
    const newTodoButton = createNewTodoButton();
    contentDiv.appendChild(newTodoButton);
    selectedProject = project
    loadTodos(project.todos);
}   

function loadTodos(todosArray) {
    if(todosArray.length == 0) return
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
    createTodo(title, description, dueDate, priority, selectedProject.id);
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