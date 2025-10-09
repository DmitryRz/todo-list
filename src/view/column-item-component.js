import { createElement } from '../framework/render.js';


function createColumnItemComponentTemplate() {
    return (
            `<li class="column__task">Первая задача</li>`
    );
}


export default class ColumnItemComponent {
    getTemplate() {
        return createColumnItemComponentTemplate();
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
