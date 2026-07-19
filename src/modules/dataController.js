import { Project } from './classes.js';
import { Todo } from './classes.js';    
import { loadProject, loadProjects } from './DOMController.js';
import { checkStorageAvailable } from './storage.js';
const projects = [];

function saveData() {
    if(checkStorageAvailable('localStorage')) {
        localStorage.setItem('projects', JSON.stringify(projects))
    }
    else {
        console.error('Couldn\'t save data!')
    }
}

export function saveKey(key, value) {
    if(checkStorageAvailable('localStorage')) {
        localStorage.setItem(key, JSON.stringify(value))
    }
    else {
        console.error('Couldn\'t save key!')
    }
}

function loadData() {
    if(!checkStorageAvailable('localStorage')) {
        console.warn('Browser doesn\'t support localStorage!')
        return
    };
    if(!localStorage.getItem('projects')) {
        console.warn('There is no previous data to load!')
        return
    }
    const projectsData = JSON.parse(localStorage.getItem('projects'))
    projectsData.forEach(projectData => {
        const project = new Project(projectData)
        project.todos = []
        projectData.todos.forEach(todoData => {
            console.log(todoData)
            const todo = new Todo(todoData)
            project.todos.push(todo)
        })
        console.log(project.todos)
        projects.push(project)
    })
    const selectedProjectId = JSON.parse(localStorage.getItem('selected-project-id'))
    loadProjects(projects)
    if(selectedProjectId) {
        loadProject(projects.find(project => project.id === selectedProjectId))
    }
}

loadData()

const findProject = (projectId) => {
    const project = projects.find(project => project.id === projectId);
    return project;
};

function findProjectByTodoId(todoId) {
    return projects.find(project => {
        if(project.todos.find(todo => todo.id === todoId)) {
            return true
        }
    })
}

const findTodo = (todoId) => {
    let parentProject;
    let todo;
    projects.forEach(project => {
        todo = project.todos.find(todoObject => todoObject.id === todoId)
        if(todo) parentProject = project
    })
    // const todo = project.todos.find(todo => todo.id == todoId);
    console.log(todo)
    return {parentProject, todo};
};

export const createProject = (title) => {
    if(title.trim().length == 0) {
        console.warn('Project title must contain at least one none-space character!')
        return
    }
    const trimmedTitle = title.trim()
    const newProject = new Project({title});
    projects.push(newProject);
    loadProjects(projects)
    loadProject(newProject);
    saveData()
};

export const editProjectTitle = (projectId, newTitle) => {
    if(newTitle.trim().length == 0) {
        console.warn('Project title must contain at least one none-space character!')
        return
    }
    const project = findProject(projectId)
    if(!project) return
    project.title = newTitle.trim()
    loadProjects(projects)
    saveData()
}

export const deleteProject = projectId => {
    const project = findProject(projectId)
    const index = projects.indexOf(project)
    projects.splice(index, 1)
    loadProjects(projects)

    saveData()
}

export const createTodo = (title, description, dueDate, priority = 'none', 
    parentProjectId = projects[0].id) => {
    const newTodo = new Todo({title, description, dueDate, priority, parentProjectId});
    const parentProject = findProject(parentProjectId);
    if(!parentProject) return;
    if(title.trim().length == 0) {
        console.warn('Todo title must contain at least one none-space character!')
        return
    }

    parentProject.todos.push(newTodo);
    console.log('Successfully created todo in: ' + parentProject.title);
    loadProject(parentProject);
    saveData()
};

export const deleteTodo = (todoId, parentProjectId) => {
    // const parentProject = findProject(parentProjectId);
    // if(!parentProject) return
    // const todo = findTodo(todoId, parentProject);
    // const parentProject = findProjectByTodoId(todoId)
    const {parentProject, todo} = findTodo(todoId)
    if(!todo) return
    parentProject.deleteTodo(todo);
    loadProject(parentProject);
    saveData()
};

export const toggleTodo = (todo) => {
    todo.toggleCompleteStatus();
    saveData()
}   

export const editTodoDetails = (todo, newTitle,
    newDescription, newDueDate, newPriority) => {
    console.log(todo)
    const parentProject = findProjectByTodoId(todo.id);
    if(!parentProject) return;
    if(newTitle.trim().length == 0) {
        console.warn('Todo title must contain at least one none-space character!')
        return
    }
    todo.editDetails(newTitle.trim(), newDescription, newDueDate, newPriority);
    console.log(newTitle)
    loadProject(parentProject);
    saveData()
};