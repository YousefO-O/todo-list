export class Project {
    constructor(data) {
        this.title = data.title;
        this.todos = data.todos || [];
        this.id = data.id || crypto.randomUUID();
    };
    deleteTodo = (todo) => {
        if(!todo) return
        const todoIndex = this.todos.indexOf(todo);
        this.todos.splice(todoIndex, 1);
        console.log(`Successfully deleted todo: ${todo.title} ` +
        `from project: ${this.title}`);
    };
};

export class Todo {
    constructor(data) {
        this.title = data.title;
        this.description = data.description;
        this.dueDate = data.dueDate;
        this.priority = data.priority;
        this.id = data.id || crypto.randomUUID();
        this.complete = data.complete || false;
    };

    toggleCompleteStatus = () => {
        this.complete = !this.complete;
        console.log(`Set ${this.title} as ${this.complete ? 'complete' : 'incomplete'}`);
    };

    editDetails = (newTitle, newDescription, newDueDate, newPriority) => {
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
    };
};