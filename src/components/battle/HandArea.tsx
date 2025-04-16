
import React from "react";
import { Card as CardType } from "@/types/game";
import GameCard from "@/components/cards/GameCard";
import { Sword, Play, SkipForward } from "lucide-react";
import { AnimatedButton } from "@/components/ui/animated-button";

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
              className={`cursor-pointer battle-card ${selectedCard?.id === card.id ? 'battle-card-selected' : ''}`}
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
      <div className="mt-6 flex justify-center space-x-4">
        <AnimatedButton 
          variant="primary"
          leftIcon={<Play className="w-4 h-4" />}
          onClick={onPlayCard} 
          disabled={!selectedCard || !isPlayerTurn || playerEnergy < (selectedCard?.cost || 0)}
          animation={isPlayerTurn && selectedCard && playerEnergy >= (selectedCard?.cost || 0) ? "pulse" : "none"}
        >
          Play Card
        </AnimatedButton>
        <AnimatedButton 
          variant="accent"
          leftIcon={<Sword className="w-4 h-4" />}
          onClick={onAttack} 
          disabled={!selectedCard || !targetCard || !isPlayerTurn}
          animation={selectedCard && targetCard && isPlayerTurn ? "pulse" : "none"}
        >
          Attack
        </AnimatedButton>
        <AnimatedButton 
          variant="outline"
          leftIcon={<SkipForward className="w-4 h-4" />}
          onClick={onEndTurn} 
          disabled={!isPlayerTurn}
          animation={isPlayerTurn ? "float" : "none"}
        >
          End Turn
        </AnimatedButton>
      </div>
    </div>
  );
};

export default HandArea;
