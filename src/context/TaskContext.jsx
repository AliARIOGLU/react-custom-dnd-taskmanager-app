/* eslint-disable */

import {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from "react";
import { DEFAULT_CARDS } from "../constants/cards-data";
import { taskReducer } from "../reducer/taskReducer";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    taskReducer,
    JSON.parse(localStorage.getItem("tasks")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => {
  return useContext(TaskContext);
};

export default TaskContextProvider;
