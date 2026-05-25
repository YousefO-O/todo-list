import { deleteTodo } from "./dataController.js";

function createTodoContainer(todo, parentProjectId) {
    const container = document.createElement('div');
    container.classList.add('todo-container');

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

export function loadTodos(todosArray, parentProjectId) {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren('');

    const todosContainer = document.createElement('div');
    todosContainer.classList.add('todos-container');

    todosArray.forEach(todo => {
        const todoContainer = createTodoContainer(todo, parentProjectId);
        todosContainer.appendChild(todoContainer);
    });
    contentDiv.appendChild(todosContainer);
};