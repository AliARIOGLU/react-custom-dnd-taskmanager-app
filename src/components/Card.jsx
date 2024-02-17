/* eslint-disable */

import { motion } from "framer-motion";

import { DropIndicator } from "./DropIndicator";
import classNames from "classnames";

export const Card = ({ title, id, column, handleDragStart }) => {
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
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <p
          className={classNames("text-sm text-neutral-100", {
            "line-through italic": column === "done",
          })}
        >
          {title}
        </p>
      </motion.div>
    </>
  );
};
