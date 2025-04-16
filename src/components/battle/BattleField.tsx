
import React from "react";
import { Card as CardType } from "@/types/game";
import GameCard from "@/components/cards/GameCard";
import { Sword, ShieldAlert, Zap } from "lucide-react";

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
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/10">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-bold text-gray-300">Opponent's Field</h3>
          <div className="flex items-center">
            <ShieldAlert className="h-4 w-4 text-game-accent mr-1" />
            <span className="text-xs text-gray-400">Defending</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          {opponentField.length > 0 ? (
            opponentField.map(card => (
              <div 
                key={card.id} 
                className={`cursor-pointer battle-card ${targetCard?.id === card.id ? 'battle-card-targeted' : ''}`}
                onClick={() => onTargetSelect(card)}
              >
                {isPlayerTurn && targetCard?.id === card.id && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-game-accent/30 animate-ping"></div>
                  </div>
                )}
                <GameCard 
                  card={card} 
                  size="sm" 
                  className={targetCard?.id === card.id ? "ring-2 ring-game-accent" : ""}
                />
              </div>
            ))
          ) : (
            <div className="text-gray-500 py-8 px-4 bg-black/20 rounded-lg w-full text-center">No cards on field</div>
          )}
        </div>
      </div>
      
      <div className="relative py-10">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-game-fire to-game-water opacity-20 animate-pulse"></div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 flex items-center gap-3">
            <Sword className="w-5 h-5 text-game-accent animate-float" />
            <div className="w-px h-6 bg-white/20"></div>
            <Zap className="w-5 h-5 text-game-primary animate-float" />
          </div>
        </div>
      </div>
      
      <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/10">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-sm font-bold text-gray-300">Your Field</h3>
          <div className="flex items-center">
            <Sword className="h-4 w-4 text-game-primary mr-1" />
            <span className="text-xs text-gray-400">{isPlayerTurn ? "Your turn" : "Waiting"}</span>
          </div>
        </div>
        
        <div className="flex justify-center gap-4">
          {playerField.length > 0 ? (
            playerField.map(card => (
              <div 
                key={card.id} 
                className={`cursor-pointer battle-card ${selectedCard?.id === card.id ? 'battle-card-selected animate-float' : ''}`}
                onClick={() => onCardSelect(card)}
              >
                <GameCard 
                  card={card} 
                  size="sm" 
                  className={selectedCard?.id === card.id ? "ring-2 ring-game-primary" : ""}
                />
                {isPlayerTurn && selectedCard?.id === card.id && (
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-game-primary rounded-full"></div>
                )}
              </div>
            ))
          ) : (
            <div className="text-gray-500 py-8 px-4 bg-black/20 rounded-lg w-full text-center">No cards on field</div>
          )}
        </div>
      </div>
    </>
  );
};

export default BattleField;
