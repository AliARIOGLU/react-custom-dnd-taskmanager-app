/* eslint-disable */
import { TASK_ACTION } from "../constants/task-actions";

export const addTask = (task) => {
  return {
    type: TASK_ACTION.ADD_TASK,
    payload: task,
  };
};

export const updateTask = (task) => {
  return {
    type: TASK_ACTION.UPDATE_TASK,
    payload: task,
  };
};

export const deleteTask = (id) => {
  return {
    type: TASK_ACTION.DELETE_TASK,
    id,
  };
};
