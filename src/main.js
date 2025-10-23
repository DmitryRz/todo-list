import HeaderComponent from './view/header-component.js';
import TaskFormComponent from './view/task-form-component.js';
import ColumnComponent from './view/column-component.js';
import FooterComponent from './view/footer-component.js';
import BoardComponent from './view/board-component.js';
import BoardPresenter from './presenter/tasks-board-presenter.js';
import { render, RenderPosition } from './framework/render.js';
import TaskModel from './model/task-model.js';

const bodyContainer = document.querySelector('.body');
const mainContainer = document.querySelector('.main');

render(new HeaderComponent(), bodyContainer, RenderPosition.AFTERBEGIN);

render(new BoardComponent(), mainContainer, RenderPosition.BEFOREEND);
const boardContainer = document.querySelector('.board__container');

const taskModel = new TaskModel();

const taskFormComponent = new TaskFormComponent({ taskModel });
render(taskFormComponent, mainContainer, RenderPosition.AFTERBEGIN);

const boardPresenter = new BoardPresenter({ 
    boardContainer: boardContainer,
    taskModel
});
boardPresenter.init();

render(new FooterComponent(), bodyContainer, RenderPosition.BEFOREEND);

