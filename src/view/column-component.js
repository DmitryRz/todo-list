import { createElement } from '../framework/render.js';


function createColumnComponentTemplate() {
    return (
        `<div class="column column--backlog">
            <h2 class="column__title">Бэклог</h2>
            <ul class="column__list">
            
            </ul>
        </div>`
    );
}


export default class ColumnComponent {
    getTemplate() {
        return createColumnComponentTemplate();
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
