export class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = [];
        this.id = crypto.randomUUID();
    };
    deleteTodoItem = (todoItem) => {
        if(todoItem) {
            const todoItemIndex = this.todoItems.indexOf(todoItem);
            this.todoItems.splice(todoItemIndex, 1);
            console.log(`Successfully deleted todo item: ${todoItem.title}` +
                `from project: ${this.title}`);
        };
    };
};

export class TodoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.id = crypto.randomUUID();
    };
};