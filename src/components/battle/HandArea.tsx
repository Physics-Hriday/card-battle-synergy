
import React from "react";
import { Card as CardType } from "@/types/game";
import GameCard from "@/components/cards/GameCard";
import { Button } from "@/components/ui/button";
import { Sword } from "lucide-react";

interface HandAreaProps {
  playerHand: CardType[];
  selectedCard: CardType | null;
  onCardSelect: (card: CardType) => void;
  onPlayCard: () => void;
  onAttack: () => void;
  onEndTurn: () => void;
  isPlayerTurn: boolean;
  targetCard: CardType | null;
  playerEnergy: number;
}

const HandArea = ({
  playerHand,
  selectedCard,
  onCardSelect,
  onPlayCard,
  onAttack,
  onEndTurn,
  isPlayerTurn,
  targetCard,
  playerEnergy,
}: HandAreaProps) => {
  return (
    <div className="glass-panel">
      <h3 className="text-sm font-bold mb-3 text-gray-400">Your Hand</h3>
      <div className="flex justify-center gap-4 overflow-x-auto pb-2">
        {playerHand.length > 0 ? (
          playerHand.map(card => (
            <div 
              key={card.id} 
              className="cursor-pointer" 
              onClick={() => onCardSelect(card)}
            >
              <GameCard 
                card={card} 
                size="sm" 
                className={selectedCard?.id === card.id ? "ring-2 ring-game-primary" : ""}
              />
            </div>
          ))
        ) : (
          <div className="text-gray-500 py-8">No cards in hand</div>
        )}
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <Button 
          onClick={onPlayCard} 
          disabled={!selectedCard || !isPlayerTurn || playerEnergy < (selectedCard?.cost || 0)}
          className="bg-game-primary hover:bg-game-primary/90"
        >
          Play Card
        </Button>
        <Button 
          onClick={onAttack} 
          disabled={!selectedCard || !targetCard || !isPlayerTurn}
          className="bg-game-accent hover:bg-game-accent/90"
        >
          <Sword className="mr-2 w-4 h-4" />
          Attack
        </Button>
        <Button 
          onClick={onEndTurn} 
          disabled={!isPlayerTurn}
          variant="outline"
          className="border-white/20"
        >
          End Turn
        </Button>
      </div>
    </div>
  );
};

export default HandArea;
