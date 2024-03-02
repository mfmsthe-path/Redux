
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Math.random(), // Utilisation d'un identifiant aléatoire pour simplifier
    description,
    isDone: false,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});
