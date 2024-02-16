import { useState, useEffect } from "react";

import { Column } from "./Column";
import { BurnBarrel } from "./BurnBarrel";
import { DEFAULT_CARDS } from "../constants/cards-data";
import { COLUMN_DATA } from "../constants/column-data";

export const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    hasChecked && localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards, hasChecked]);

  useEffect(() => {
    const cardData = localStorage.getItem("cards");

    setCards(cardData ? JSON.parse(cardData) : []);
    setHasChecked(true);
  }, []);

  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">
      {COLUMN_DATA.map((column) => (
        <Column key={column.id} cards={cards} setCards={setCards} {...column} />
      ))}
      <BurnBarrel setCards={setCards} />
    </div>
  );
};
