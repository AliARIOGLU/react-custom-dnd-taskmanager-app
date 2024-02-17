/* eslint-disable */

import { TASK_ACTION } from "../constants/task-actions";

export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case TASK_ACTION.ADD_TASK: {
      return [...tasks, action.payload];
    }
    case TASK_ACTION.UPDATE_TASK: {
      const { id } = action.payload;
      return tasks.map((task) =>
        task.id === id ? { ...action.payload } : task
      );
    }
    case TASK_ACTION.DELETE_TASK: {
      return tasks.filter((task) => task.id !== action.id);
    }
    default:
      return tasks;
  }
};
