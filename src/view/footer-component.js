import { createElement } from '../framework/render.js';


function createFooterComponentTemplate() {
    return (
        `
        <footer class="footer">
            <p class="footer__text"><small>// TODO: Написать что-нибудь умное для футера</small></p>
            <p class="footer__link"><a href="https://github.com/DmitryRz/todo-list">GitHub</a></p>
        </footer>
        `
    );
}


export default class FooterComponent {
    getTemplate() {
        return createFooterComponentTemplate();
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
