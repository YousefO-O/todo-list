import { createTodo } from "./dataController.js";
import { editTodoDetails } from "./dataController.js";
import { createTodoContainer } from "./todo-component.js";
import { createProject, editProjectTitle } from "./dataController.js";
import { createProjectComponent } from "./project-component.js";
import { saveKey } from "./dataController.js";
let selectedProject = null
export const setSelectedProject = (project) => selectedProject = project
let todoBeingEdited = null
let projectBeingEdited = null

const projectsContainer = document.querySelector('#projects-container')
const addProjectButton = document.querySelector('#add-project-button')
const newProjectForm = document.querySelector('#new-project-form')
const newProjectDialog = document.querySelector('#new-project-dialog')
const editProjectForm = document.querySelector('#edit-project-form')
const editProjectDialog = document.querySelector('#edit-project-dialog')
addProjectButton.addEventListener('click', () => {
    newProjectDialog.showModal()
})

editProjectForm.addEventListener('submit', (event) => {
    editProjectDialog.close()
    event.preventDefault()
    const title = document.querySelector('#edited-project-title').value
    editProjectTitle(projectBeingEdited.id, title)
})

newProjectForm.addEventListener('submit', (event) => {
    newProjectDialog.close()
    event.preventDefault()
    const title = document.querySelector('#project-title').value
    createProject(title)
})

export const setTodoBeingEdited = (value) => todoBeingEdited = value
export const setProjectBeingEdited = (value) => projectBeingEdited = value

const newTodoDialog = document.querySelector('#new-todo-dialog');
const editTodoDialog = document.querySelector('#edit-todo-dialog');

export const showEditTodoDialog = () => editTodoDialog.showModal()

const closeDialogButtons = document.querySelectorAll('.close-dialog-button');
[...closeDialogButtons].forEach(button => {
    button.addEventListener('click', (event) => {
        const dialog = document.querySelector('dialog[open]')
        if(dialog) dialog.close()
    });
});

const dialogs = document.querySelectorAll('dialog');
[...dialogs].forEach(dialog => {
    dialog.addEventListener('close', () => {
        dialog.querySelector('form').reset()
    })
})

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
    newTodoButton.textContent = 'Add Todo';
    newTodoButton.classList.add('new-todo-button') 
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
    saveKey('selected-project-id', selectedProject.id)
    const projectComponents = [...document.querySelectorAll('.project-component')]
    projectComponents.forEach(projectComponent => {
        projectComponent.dataset.selected = false;
    })
    document.querySelector(`[data-id='${project.id}']`).dataset.selected = 'true';
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
    newTodoDialog.close()
    const title = document.querySelector('#todo-title').value;
    const description = document.querySelector('#todo-description').value;
    const dueDate = document.querySelector('#todo-due-date').value;
    const priority = document.querySelector('#todo-priority').value;
    createTodo(title, description, dueDate, priority, selectedProject.id);
};

function handleEditTodoSubmit(event) {
    event.preventDefault();
    editTodoDialog.close()
    const title = document.querySelector('#edited-todo-title').value;
    const description = document.querySelector('#edited-todo-description').value;
    const dueDate = document.querySelector('#edited-todo-due-date').value;
    const priority = document.querySelector('#edited-todo-priority').value;
    editTodoDetails(todoBeingEdited, title, description, dueDate, priority);
    todoBeingEdited = null
};

export function setEditTodoFormValues(title, description, dueDate, priority) {
    document.querySelector('#edited-todo-title').value = title; 
    document.querySelector('#edited-todo-description').value = description || '';
    document.querySelector('#edited-todo-due-date').value = dueDate;
    document.querySelector('#edited-todo-priority').value = priority;
};