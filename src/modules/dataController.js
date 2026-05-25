import { Project } from './classes.js';
import { Todo } from './classes.js';    
import { loadProject } from './DOMController.js';

const projects = [];

const findProject = (projectId) => {
    const project = projects.find(project => project.id === projectId);
    return project;
};

const findTodo = (todoId, project) => {
    const todo = project.todos.find(todo => todo.id == todoId);
    return todo;
};

export const createProject = (title) => {   
    const newProject = new Project(title);
    projects.push(newProject);
    loadProject(newProject.todos, newProject.id);
};

export const createTodo = (title, description, dueDate, priority, 
    parentProjectId = projects[0].id) => {
    const newTodo = new Todo(title, description, dueDate, priority);
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return;
    parentProject.todos.push(newTodo);
    console.log('Successfully created todo in: ' + parentProject.title);
    loadProject(parentProject.todos, parentProjectId);
};

export const deleteTodo = (todoId, parentProjectId) => {
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return
    const todo = findTodo(todoId, parentProject);
    if(!todo) return
    parentProject.deleteTodo(todo);
    loadProject(parentProject.todos, parentProjectId);
};

export const toggleTodo = (todoId, parentProjectId) => {
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return;
    const todo = findTodo(todoId, parentProject);
    if(!todo) return;
    todo.toggleCompleteStatus();
}   

export const editTodoDetails = (todoId, parentProjectId, newTitle,
    newDescription, newDueDate, newPriority) => {
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return;
    const todo = findTodo(todoId, parentProject);
    todo.editDetails(newTitle, newDescription, newDueDate, newPriority);
    loadProject(parentProject.todos, parentProjectId);
};