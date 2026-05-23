export class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = [];
        this.id = crypto.randomUUID();
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