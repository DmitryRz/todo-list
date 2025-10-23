import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class ColumnComponent extends AbstractComponent {
    constructor(status) {
        super();
        this.status = status;
    }

    get template() {
        const { value, label } = this.status;
        return (
            `<div class="column column--${value}">
                <h2 class="column__title">${label}</h2>
                <ul class="column__list">
                
                </ul>
            </div>`
        );
    }

    getListElement() {
        return this.element.querySelector('.column__list');
    }
}
