import HeaderComponent from './view/header-component.js';
import BoardComponent from './view/board-component.js';
import TaskFormComponent from './view/task-form-component.js';
import ColumnComponent from './view/column-component.js';
import ColumnListComponent from './view/column-item-component.js';
import FooterComponent from './view/footer-component.js';
import { render, RenderPosition } from './framework/render.js';


const bodyContainer = document.querySelector('.body');
const mainContainer = document.querySelector('.main');


render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);
render(new TaskFormComponent(), mainContainer, RenderPosition.AFTERBEGIN);
render(new BoardComponent(), mainContainer, RenderPosition.BEFOREEND);
const boardContainer = document.querySelector('.board__container');
for (let i = 0; i < 4; i++) {
    render(new ColumnComponent(), boardContainer, RenderPosition.BEFOREEND);
}

const columnListContainer = document.querySelectorAll('.column__list');
columnListContainer.forEach((column) => {
    for (let i = 0; i < 3; i++) {
        render(new ColumnListComponent(), column, RenderPosition.BEFOREEND);
    }
});

render(new FooterComponent(), bodyContainer, RenderPosition.BEFOREEND);
