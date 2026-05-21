export class Project {
    constructor(title) {
        this.title = title;
        this.todoItems = [];
        this.id = crypto.randomUUID();
    };
};