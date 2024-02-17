/* eslint-disable */
import { TASK_ACTION } from "../constants/task-actions";

export const addTask = (task) => {
  return {
    type: TASK_ACTION.ADD_TASK,
    payload: task,
  };
};

export const updateTasks = (newTasks) => {
  return {
    type: TASK_ACTION.UPDATE_TASKS,
    payload: newTasks,
  };
};

export const deleteTask = (id) => {
  return {
    type: TASK_ACTION.DELETE_TASK,
    id,
  };
};

export const editTask = (newTask) => {
  return {
    type: TASK_ACTION.EDIT_TASK,
    payload: newTask,
  };
};
