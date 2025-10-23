import { createElement } from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


export default class BoardComponent extends AbstractComponent {
    get template() {
        return (
            `<section class="board__container">
        
            </section>`
        );
    }
}
