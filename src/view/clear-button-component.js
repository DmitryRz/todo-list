import { AbstractComponent } from '../framework/view/abstract-component.js';

export default class ClearButtonComponent extends AbstractComponent {
  constructor({ onClick }) {
    super();
    this._onClick = onClick;
    
    this.#setClickHandler();
  }

  get template() {
    return `
      <button class="button--clear button" type="button">
        Очистить
      </button>
    `;
  }

  #clickHandler = (evt) => {
    evt.preventDefault();
    if (this._onClick) {
      this._onClick();
    }
  };

  #setClickHandler() {
    if (this.element) {
      this.element.addEventListener('click', this.#clickHandler);
    }
  }
}