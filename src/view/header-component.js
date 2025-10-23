import { createElement } from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createHeaderComponentTemplate() {

}


export default class HeaderComponent extends AbstractComponent {
    get template() {
        return (
            `<header class="header">
            <div class="header__container">
                <h1 class="header__title">Список задач</h1>
            </div>
        </header>`
        );
    }
}
