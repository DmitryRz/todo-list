import { createElement } from '../framework/render.js';


function createTaskFormComponentTemplate() {
    return (
        `<section class="task-form">
            <h2 class="task-form__title">Новая задача</h2>
            <form class="task-form__form">
                <div class="task-form__input-group">
                    <input class="task-form__input" type="text">
                    <button class="button button--form" type="submit">Добавить</button>
                </div>
            </form>
        </section>` 
    );
}

export default class TaskFormComponent {

    getTemplate() {
        return createTaskFormComponentTemplate();
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
