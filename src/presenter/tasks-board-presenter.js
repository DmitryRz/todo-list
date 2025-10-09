import ColumnItemComponent from '../view/column-item-component.js';
import ColumnComponent from '../view/column-component.js';
import BoardComponent from '../view/board-component.js';
import { Status } from '../const.js';
import { render } from '../framework/render.js';

export default class BoardPresenter {
    #boardComponent = new BoardComponent();

    #boardContainer = null;
    #taskModel = null;

    #boardTask = [];

    constructor({ boardContainer, taskModel }) {
        this.#boardContainer = boardContainer;
        this.#taskModel = taskModel;
    }

    init() {
        this.#boardTask = [...this.#taskModel.getTasks()];
        render(this.#boardComponent, this.#boardContainer);
        console.log(Status)
        for (let i = 0; i < Status.length; i++) {
            const columnComponent = new ColumnComponent(Status[i]);
            render(columnComponent, this.#boardComponent.getElement());

            for (let j = 0; j < this.#boardTask.length; j++) {
                if (this.#boardTask[j].status === Status[i].value) {
                    const columnItemComponent = new ColumnItemComponent(this.#boardTask[j]);
                    render(columnItemComponent, columnComponent.getListElement());
                }
            }
        }
    }
}