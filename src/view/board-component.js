import { createElement } from '../framework/render.js';


function createBoardComponentTemplate() {
    return (
        `<section class="board__container">
        
        </section>`
    );
}


export default class BoardComponent {
    getTemplate() {
        return createBoardComponentTemplate();
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
