import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class ColumnItemComponent extends AbstractComponent {
    constructor(task) {
        super();
        this.task = task;
        this.#afterCreateElement();
    }

    get template() {
        const { title } = this.task;

        return (
            `<li class="column__task">${title}</li>`
        );
    }

    #afterCreateElement() {
        this.setDragHandlers();
    }

    setDragHandlers() {
        this.element.setAttribute(`draggable`, true);
        this.element.addEventListener('dragstart', this.#onDragStart)
        this.element.addEventListener('dragend', this.#onDragEnd);
    }

    #onDragStart = (event) => {
        event.dataTransfer.setData('text/plain', this.task.id);
        event.dataTransfer.effectAllowed = 'move';
        this.element.classList.add('dragging');
    }

    #onDragEnd = (event) => {
        this.element.classList.remove('dragging');
    }

    removeElement() {
        this.element.removeEventListener('dragstart', this.#onDragStart);
        this.element.removeEventListener('dragend', this.#onDragEnd);
        super.removeElement();
    }
}
