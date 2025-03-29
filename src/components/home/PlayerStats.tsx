
import React from "react";
import { Trophy, Sword, Library, Zap } from "lucide-react";
import StatCard from "./StatCard";
import { Player } from "@/types/game";

interface PlayerStatsProps {
  player: Player;
}

const PlayerStats = ({ player }: PlayerStatsProps) => {
  return (
    <div className="glass-panel">
      <div className="flex items-center mb-6">
        <div className="relative mr-4">
          <img 
            src={player.avatar} 
            alt="Player Avatar" 
            className="w-16 h-16 rounded-full border-2 border-game-primary"
          />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-game-primary text-white text-xs rounded-full flex items-center justify-center">
            {player.level}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">{player.username}</h2>
          <div className="flex items-center text-sm text-gray-300">
            <span className="bg-game-primary/20 text-game-primary px-2 py-1 rounded-full text-xs mr-2">
              {player.stats.rankName}
            </span>
            <span>
              {player.stats.wins}W / {player.stats.losses}L ({player.stats.winRate}% win rate)
            </span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard 
          title="Current Rank" 
          value={player.stats.rankName} 
          icon={<Trophy className="text-yellow-500" />} 
        />
        <StatCard 
          title="Total Battles" 
          value={player.stats.totalGames.toString()} 
          icon={<Sword className="text-game-accent" />} 
        />
        <StatCard 
          title="Cards Owned" 
          value={player.collection.length.toString()} 
          icon={<Library className="text-game-secondary" />} 
        />
        <StatCard 
          title="Win Rate" 
          value={`${player.stats.winRate}%`} 
          icon={<Zap className="text-game-primary" />} 
        />
      </div>
    </div>
  );
};

export default PlayerStats;
