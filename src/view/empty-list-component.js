import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class EmptyListComponent extends AbstractComponent {
  get template() {
    return `<p class="column__no_task">Нет задач</p>`;
  }
}