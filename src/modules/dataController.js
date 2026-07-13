import { Project } from './classes.js';
import { Todo } from './classes.js';    
import { loadProject, loadProjects } from './DOMController.js';
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
    loadProjects(projects)
    loadProject(newProject);
};

export const editProjectTitle = (projectId, newTitle) => {
    const project = findProject(projectId)
    if(!project) return
    project.title = newTitle
}

export const deleteProject = projectId => {
    const project = findProject(projectId)
    const index = projects.indexOf(project)
    projects.splice(index, 1)
    loadProjects(projects)
}

export const createTodo = (title, description, dueDate, priority = 'none', 
    parentProjectId = projects[0].id) => {
    const newTodo = new Todo(title, description, dueDate, priority, parentProjectId);
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return;
    parentProject.todos.push(newTodo);
    console.log('Successfully created todo in: ' + parentProject.title);
    loadProject(parentProject);
};

export const deleteTodo = (todoId, parentProjectId) => {
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return
    const todo = findTodo(todoId, parentProject);
    if(!todo) return
    parentProject.deleteTodo(todo);
    loadProject(parentProject);
};

export const toggleTodo = (todo) => {
    todo.toggleCompleteStatus();
}   

export const editTodoDetails = (todo, newTitle,
    newDescription, newDueDate, newPriority) => {
    const parentProject = findProject(todo.projectId);
    if(!parentProject) return;
    todo.editDetails(newTitle, newDescription, newDueDate, newPriority);
    loadProject(parentProject);
};