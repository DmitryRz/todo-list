import { createElement } from '../framework/render.js';


function createColumnItemComponentTemplate(task) {
    const { title } = task;

    return (
            `<li class="column__task">${title}</li>`
    );
}


export default class ColumnItemComponent {
    constructor(task) {
        this.task = task;
    }

    getTemplate() {
        return createColumnItemComponentTemplate(this.task);
    }


    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }


        return this.element;
    }


    removeElement() {
        this.element = null;
    }
}
