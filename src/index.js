import './styles.css';
import { createNewProject } from './modules/dataController.js';
import { createNewTodoItem } from './modules/dataController.js';

// Default Project
createNewProject('Todo List');
createNewTodoItem('todo 1', 'todo 1 description', 'now', 'important');