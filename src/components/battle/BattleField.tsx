
import React from "react";
import { Card as CardType } from "@/types/game";
import GameCard from "@/components/cards/GameCard";
import { Sword } from "lucide-react";

interface BattleFieldProps {
  opponentField: CardType[];
  playerField: CardType[];
  selectedCard: CardType | null;
  targetCard: CardType | null;
  onCardSelect: (card: CardType) => void;
  onTargetSelect: (card: CardType) => void;
  isPlayerTurn: boolean;
}

const BattleField = ({
  opponentField,
  playerField,
  selectedCard,
  targetCard,
  onCardSelect,
  onTargetSelect,
  isPlayerTurn
}: BattleFieldProps) => {
  return (
    <>
      <div className="bg-black/20 rounded-lg p-4 mb-4">
        <h3 className="text-sm font-bold mb-3 text-gray-400">Opponent's Field</h3>
        <div className="flex justify-center gap-4">
          {opponentField.length > 0 ? (
            opponentField.map(card => (
              <div 
                key={card.id} 
                className="cursor-pointer" 
                onClick={() => onTargetSelect(card)}
              >
                <GameCard 
                  card={card} 
                  size="sm" 
                  className={targetCard?.id === card.id ? "ring-2 ring-game-accent" : ""}
                />
              </div>
            ))
          ) : (
            <div className="text-gray-500 py-8">No cards on field</div>
          )}
        </div>
      </div>
      
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-game-fire to-game-water opacity-20 animate-pulse"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
            <Sword className="w-6 h-6 text-game-accent" />
          </div>
        </div>
      </div>
      
      <div className="bg-black/20 rounded-lg p-4 mb-4">
        <h3 className="text-sm font-bold mb-3 text-gray-400">Your Field</h3>
        <div className="flex justify-center gap-4">
          {playerField.length > 0 ? (
            playerField.map(card => (
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
            <div className="text-gray-500 py-8">No cards on field</div>
          )}
        </div>
      </div>
    </>
  );
};

export default BattleField;
