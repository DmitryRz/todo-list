import { createElement } from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class TaskFormComponent extends AbstractComponent {

    get template() {
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
}
