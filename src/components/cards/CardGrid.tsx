
import React from "react";
import { Card as CardType } from "@/types/game";
import GameCard from "./GameCard";

interface CardGridProps {
  cards: CardType[];
  onCardClick?: (card: CardType) => void;
  selectable?: boolean;
  selectedCards?: string[];
  cardSize?: "sm" | "md" | "lg";
}

const CardGrid = ({
  cards,
  onCardClick,
  selectable = false,
  selectedCards = [],
  cardSize = "md",
}: CardGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      {cards.map((card) => (
        <GameCard
          key={card.id}
          card={card}
          onClick={() => onCardClick && onCardClick(card)}
          selectable={selectable}
          selected={selectedCards.includes(card.id)}
          size={cardSize}
        />
      ))}
    </div>
  );
};

export default CardGrid;
