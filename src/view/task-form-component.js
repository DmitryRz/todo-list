// src/view/task-form-component.js
import { createElement } from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';
import { generateID } from '../utils.js';

export default class TaskFormComponent extends AbstractComponent {
    #taskModel = null;
    #inputElement = null;

    constructor({ taskModel }) {
        super();
        this.#taskModel = taskModel;

        this.element.addEventListener('submit', this.#handleFormSubmit);
    }

    get template() {
        return (
            `<section class="task-form">
                <h2 class="task-form__title">Новая задача</h2>
                <form class="task-form__form">
                    <div class="task-form__input-group">
                        <input class="task-form__input" type="text" placeholder="Введите задачу" required>
                        <button class="button button--form" type="submit">Добавить</button>
                    </div>
                </form>
            </section>`
        );
    }

    #getInputElement() {
        if (!this.#inputElement) {
            this.#inputElement = this.element.querySelector('.task-form__input');
        }
        return this.#inputElement;
    }

    #handleFormSubmit = (evt) => {
        evt.preventDefault();
        
        const input = this.#getInputElement();
        const taskTitle = input.value.trim();

        if (!taskTitle) {
            input.focus();
            return;
        }

        const newTask = {
            id: generateID(),
            title: taskTitle,
            status: "backlog"
        };

        this.#taskModel.addTask(newTask);

        input.value = '';
        input.focus();
    }

    setEventListeners() {
        this.element.querySelector('.task-form__form')
            .addEventListener('submit', this.#handleFormSubmit);
    }
}