import { Project } from './classes.js';
import { TodoItem } from './classes.js';    

const projects = [];
export const createNewProject = (title) => {   
    const newProject = new Project(title);
    projects.push(newProject);
};

export const createNewTodoItem = (title, description, dueDate, priority, 
    parentProjectId = projects[0].id) => {
    const newTodoItem = new TodoItem(title, description, dueDate, priority);
    const parentProject = projects.find(project => project.id === parentProjectId);
    if(parentProject) {
        parentProject.todoItems.push(newTodoItem);
        console.log('Successfully created todo item in: ' + parentProject.title);
        return
    }
    console.log('No project has the ID you\'ve entered.');
};
