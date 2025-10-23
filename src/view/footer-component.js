import { createElement } from '../framework/render.js';
import { AbstractComponent } from '../framework/view/abstract-component.js';


function createFooterComponentTemplate() {

}


export default class FooterComponent extends AbstractComponent {
    get template() {
        return (
            `<footer class="footer">
                <p class="footer__text"><small>// TODO: Написать что-нибудь умное для футера</small></p>
                <p class="footer__link"><a href="https://github.com/DmitryRz/todo-list">GitHub</a></p>
            </footer>`
        );
    }
}
