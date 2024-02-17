import { Column } from "./Column";
import { BurnBarrel } from "./BurnBarrel";

import { COLUMN_DATA } from "../constants/column-data";

export const Board = () => {
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      {COLUMN_DATA.map((column) => (
        <Column key={column.id} {...column} />
      ))}
      <BurnBarrel />
    </div>
  );
};
