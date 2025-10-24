import ColumnItemComponent from '../view/column-item-component.js';
import ColumnComponent from '../view/column-component.js';
import BoardComponent from '../view/board-component.js';
import EmptyListComponent from '../view/empty-list-component.js';
import ClearButtonComponent from '../view/clear-button-component.js';
import { Status } from '../const.js';
import { render } from '../framework/render.js';

export default class BoardPresenter {
    #boardComponent = new BoardComponent();
    #boardContainer = null;
    #taskModel = null;
    #boardTask = [];
    #columnComponents = new Map();

    constructor({ boardContainer, taskModel }) {
        this.#boardContainer = boardContainer;
        this.#taskModel = taskModel;

        this.#taskModel.addObserver(this.#handleModelChange.bind(this));
    }

    init() {
        this.#boardTask = [...this.#taskModel.tasks];
        render(this.#boardComponent, this.#boardContainer);

        this.#renderBoard();
        this.#setEventHandlers();
    }

    #handleModelChange() {
        this.#boardTask = [...this.#taskModel.tasks];
        this.#clearBoard();
        this.#renderBoard();
        this.#setEventHandlers();
    }

    #clearBoard() {
        this.#boardComponent.element.innerHTML = '';
        this.#columnComponents.clear();
    }

    #renderBoard() {
        Status.forEach((statusObj) => {
            const columnComponent = new ColumnComponent(statusObj);
            render(columnComponent, this.#boardComponent.element);
            this.#columnComponents.set(statusObj.value, columnComponent);

            this.#renderTasksList(columnComponent, statusObj.value);
        });
    }

    #renderTasksList(columnComponent, statusValue) {
        const tasksForStatus = this.#getTasksByStatus(statusValue);

        if (tasksForStatus.length === 0) {
            this.#renderEmptyList(columnComponent.getListElement());
        } else {
            tasksForStatus.forEach((task) => {
                this.#renderTask(task, columnComponent.getListElement());
            });
        }
        
        if (statusValue === "trash") {
            this.#renderClearButton(columnComponent, statusValue);
        }
    }

    #renderTask(task, container) {
        const columnItemComponent = new ColumnItemComponent(task);
        render(columnItemComponent, container);
        columnItemComponent.setDragHandlers();
    }

    #renderEmptyList(container) {
        const emptyListComponent = new EmptyListComponent();
        render(emptyListComponent, container);
    }

    #renderClearButton(columnComponent, statusValue) {
        const clearButtonComponent = new ClearButtonComponent({
            onClick: () => this.#handleClearClick(statusValue)
        });

        render(clearButtonComponent, columnComponent.element);
    }

    #setEventHandlers() {
        this.#boardComponent.element.addEventListener('taskdrop', this.#handleTaskDrop.bind(this));
        
        this.#columnComponents.forEach(column => {
            column.setDropHandlers();
        });
    }

    #handleTaskDrop(evt) {
        const { taskId, newStatus } = evt.detail;
        this.#taskModel.updateTaskStatus(taskId, newStatus);
    }

    #handleClearClick() {
        this.#taskModel.clearTrash();
    }

    #getTasksByStatus(statusValue) {
        return this.#boardTask.filter(task => task.status === statusValue);
    }
}