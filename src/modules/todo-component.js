import { setEditTodoFormValues, setTodoBeingEdited } from "./DOMController.js";
import { showEditTodoDialog, toggleDescriptionDisplay } from "./DOMController.js"
import { deleteTodo, toggleTodo } from "./dataController.js";
import { intlFormatDistance } from "date-fns";  

export function createTodoContainer(todo) {
    const container = document.createElement('div');
    container.classList.add('todo-container');
    container.dataset.priority = todo.priority;
    container.dataset.completed = todo.completed
    
    const topContainer = document.createElement('div')
    topContainer.classList.add('todo-top')
    
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

    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', ()=> {
        setTodoBeingEdited(todo)
        setEditTodoFormValues(todo.title, todo.description, todo.dueDate, todo.priority);
        showEditTodoDialog()
    });

    buttonsContainer.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', ()=>{
        deleteTodo(todo.id, todo.projectId);
    });
    
    buttonsContainer.appendChild(deleteButton);

    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add('todo-toggle-container')
    const toggleButton = document.createElement('input');
    toggleButton.type = 'checkbox';
    toggleButton.classList.add('todo-toggle-button')
    toggleButton.addEventListener('change', () => {
        toggleTodo(todo)
        container.dataset.completed = todo.complete
        title.disabled = todo.complete
        editButton.disabled = todo.complete
        deleteButton.disabled = todo.complete
    })
    toggleContainer.appendChild(toggleButton);


    

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

    

    topContainer.appendChild(buttonsContainer)

    container.appendChild(toggleContainer)
    container.appendChild(topContainer)
    if(description) {
        container.appendChild(description)
    }
    return container;
};