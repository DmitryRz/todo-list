let idCounter = 0;

export const generateID = () => {
  return ++idCounter;
};