export class Project {
    constructor(title) {
        this.title = title;
        this.todos = [];
        this.id = crypto.randomUUID();
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
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
        this.complete = false;
    };

    toggleCompleteStatus = () => {
        this.complete = !this.complete;
        console.log(`Set ${this.title} as ${this.complete ? 'complete' : 'incomplete'}`);
    };
};