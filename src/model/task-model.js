import { task } from "../mock/task.js";

export default class TaskModel {
    #boardTasks = task

    get task() {
        return this.#boardTasks
    }
}