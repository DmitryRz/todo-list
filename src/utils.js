import { tasks } from './mock/tasks.js'

let idCounter = Math.max(...tasks.map(task => task.id), 0);

export const generateID = () => {
  return ++idCounter;
};