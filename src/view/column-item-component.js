import { createElement } from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createColumnItemComponentTemplate(task) {
    const { title } = task;

    return (
        `<li class="column__task">${title}</li>`
    );
}


export default class ColumnItemComponent extends AbstractComponent {
    constructor(task) {
        super(); 
        this.task = task;
    }

    get template() {
        const { title } = this.task;

        return (
            `<li class="column__task">${title}</li>`
        );
    }
}
