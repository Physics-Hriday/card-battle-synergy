
import React from "react";
import { Card as CardType } from "@/types/game";
import { Progress } from "@/components/ui/progress";
import { mockPlayer } from "@/data/mockData";

interface PlayerAreaProps {
  health: number;
  maxHealth: number;
  energy: number;
  maxEnergy: number;
  isOpponent?: boolean;
}

const PlayerArea = ({ health, maxHealth, energy, maxEnergy, isOpponent = false }: PlayerAreaProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <div className="relative">
          <img 
            src={isOpponent ? "/avatars/opponent.png" : mockPlayer.avatar}
            alt={isOpponent ? "Opponent" : "Player"}
            className={`w-12 h-12 rounded-full border-2 ${isOpponent ? 'border-game-accent' : 'border-game-primary'}`}
          />
          <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${isOpponent ? 'bg-game-accent' : 'bg-game-primary'} text-white text-xs rounded-full flex items-center justify-center`}>
            {isOpponent ? "20" : mockPlayer.level}
          </div>
        </div>
        <div className="ml-3">
          <h3 className="font-bold">{isOpponent ? "Challenger" : mockPlayer.username}</h3>
          <div className="text-xs text-gray-400">
            <span className={isOpponent ? "text-game-accent" : "text-game-primary"}>
              {isOpponent ? "Diamond" : mockPlayer.stats.rankName}
            </span> Rank
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div>
          <div className="text-xs text-gray-400 mb-1">Health</div>
          <div className="flex items-center">
            <Progress value={(health / maxHealth) * 100} className="w-32 h-2 bg-white/20" />
            <span className="ml-2 text-sm font-bold">{health}/{maxHealth}</span>
          </div>
        </div>
        
        <div>
          <div className="text-xs text-gray-400 mb-1">Energy</div>
          <div className="flex items-center">
            <div className="flex space-x-1">
              {Array.from({ length: maxEnergy }).map((_, i) => (
                <div 
                  key={i}
                  className={`w-3 h-3 rounded-full ${i < energy ? 'bg-game-primary' : 'bg-white/20'}`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm font-bold">{energy}/{maxEnergy}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerArea;
