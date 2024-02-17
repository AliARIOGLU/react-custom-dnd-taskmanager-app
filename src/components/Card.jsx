/* eslint-disable */

import { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { MdModeEdit } from "react-icons/md";
import { FaSave } from "react-icons/fa";

import { DropIndicator } from "./DropIndicator";
import { useTask } from "../context/TaskContext";
import { editTask } from "../reducer/actions";

export const Card = ({ title, id, column, handleDragStart }) => {
  const [edit, setEdit] = useState("");
  const [editedText, setEditedText] = useState("");

  const { dispatch } = useTask();

  const updateTaskHandler = () => {
    if (!editedText.trim().length) return;

    dispatch(editTask({ id, column, title: editedText.trim() }));
  };

  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        style={{
          opacity: column === "done" ? 0.5 : 1,
        }}
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing flex justify-between items-center"
      >
        {edit ? (
          <input
            type="text"
            defaultValue={title}
            onChange={(e) => setEditedText(e.target.value)}
            className="bg-transparent text-sm p-1 outline-none border border-gray-500"
          />
        ) : (
          <p
            className={classNames("text-sm text-neutral-100", {
              "line-through italic": column === "done",
            })}
          >
            {title}
          </p>
        )}
        {edit ? (
          <FaSave
            draggable="false"
            onClick={() => {
              updateTaskHandler();
              setEdit(false);
            }}
            className={classNames("cursor-pointer text-slate-50 w-6 h-6 z-20", {
              "opacity-0": column === "done",
            })}
          />
        ) : (
          <MdModeEdit
            draggable="false"
            onClick={() => setEdit(true)}
            className={classNames(
              "cursor-pointer bg-slate-700 h-6 w-6 rounded z-20",
              {
                "opacity-0": column === "done",
              }
            )}
          />
        )}
      </motion.div>
    </>
  );
};
