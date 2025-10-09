import { createElement } from '../framework/render.js';


function createColumnComponentTemplate(status) {
    const { value, label } = status;
    return (
        `<div class="column column--${value}">
            <h2 class="column__title">${label}</h2>
            <ul class="column__list">
            
            </ul>
        </div>`
    );
}


export default class ColumnComponent {
    constructor(status) {
        this.status = status;
    }

    getTemplate() {
        return createColumnComponentTemplate(this.status);
    }


    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate());
        }


        return this.element;
    }

    getListElement() {
        return this.getElement().querySelector('.column__list');
    }


    removeElement() {
        this.element = null;
    }
}
