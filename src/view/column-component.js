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

    getStatus() {
        return this.status.value;
    }

    #onDragOver = (evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
        this.element.classList.add('drag-over');
        
        const afterElement = this.#getDragAfterElement(this.getListElement(), evt.clientY);
        const draggable = document.querySelector('.dragging');
        
        if (afterElement == null) {
            this.getListElement().appendChild(draggable);
        } else {
            this.getListElement().insertBefore(draggable, afterElement);
        }
    }

    #onDragLeave = (evt) => {
        if (!this.element.contains(evt.relatedTarget)) {
            this.element.classList.remove('drag-over');
        }
    }

    #onDrop = (evt) => {
        evt.preventDefault();
        this.element.classList.remove('drag-over');
        
        const taskId = evt.dataTransfer.getData('text/plain');
        const newStatus = this.getStatus();
        
        this.element.dispatchEvent(new CustomEvent('taskdrop', {
            detail: {
                taskId: taskId,
                newStatus: newStatus,
                targetElement: this.element
            },
            bubbles: true
        }));
    }

    #getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.column__task:not(.dragging)')];
        
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    setDropHandlers() {
        this.element.addEventListener('dragover', this.#onDragOver);
        this.element.addEventListener('dragleave', this.#onDragLeave);
        this.element.addEventListener('drop', this.#onDrop);
    }

    removeElement() {
        this.element.removeEventListener('dragover', this.#onDragOver);
        this.element.removeEventListener('dragleave', this.#onDragLeave);
        this.element.removeEventListener('drop', this.#onDrop);
        super.removeElement();
    }
}
