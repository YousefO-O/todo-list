import './styles.css';
import { Project } from './project-class.js';
import { TodoItem } from './todo-item-class.js';

const dataController = (()=>{
    const projects = [];
    const createNewProject = (title) => {   
        const newProject = new Project(title);
        projects.push(newProject);
    };
    return {
        createNewProject,
    };
})();