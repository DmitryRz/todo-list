import { task } from "../mock/task.js";

export default class TaskModel {
    #boardTasks = task

    getTasks() {
        return this.#boardTasks
    }
}