import { tasks } from "../mock/tasks.js";

export default class TaskModel {
    #boardTasks = tasks
    #observers = [];

    get tasks() {
        return [... this.#boardTasks]
    }

    addTask(taskData) {
        const newTask = {
            id: taskData.id,
            title: taskData.title,
            status: "backlog"
        };

        this.#boardTasks.push(newTask);
        this.#notifyObservers();
    }

    #notifyObservers() {
        this.#observers.forEach(observer => observer());
    }

    clearTrash() {
        this.#boardTasks = this.#boardTasks.filter(task => task.status !== "trash");
        this.#notifyObservers();
    }

    addObserver(observer) {
        this.#observers.push(observer);
    }

    updateTaskStatus(taskId, newStatus) {
        const task = this.#boardTasks.find(t => t.id === taskId);
        if (task) {
            task.status = newStatus;
            this.#notifyObservers();
        }
    }
}