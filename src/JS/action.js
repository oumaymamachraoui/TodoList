import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./actionTypes";
export const addtask = (newTask) => {
  return { type: ADD_TASK, payload: newTask };
};

export const deletetask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const donetask = (id) => {
  return { type: DONE_TASK, payload: id };
};
export const edittask = (id, newTask) => {
  return { type: EDIT_TASK, payload: { id, newTask } };
};
