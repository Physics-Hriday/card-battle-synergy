
import React from "react";
import { Sword, Library, ShoppingBag, Trophy, BookOpen, Bell, Users, Sparkles } from "lucide-react";
import QuickAction from "./QuickAction";

const QuickActionsGrid = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <QuickAction 
          title="Battle Arena" 
          description="Find opponents and battle" 
          icon={<Sword size={24} />} 
          color="bg-game-fire"
          to="/battle"
        />
        <QuickAction 
          title="Card Collection" 
          description="View your card collection" 
          icon={<Library size={24} />} 
          color="bg-game-water"
          to="/collection"
        />
        <QuickAction 
          title="Card Shop" 
          description="Buy new card packs" 
          icon={<ShoppingBag size={24} />} 
          color="bg-game-earth"
          to="/shop"
        />
        <QuickAction 
          title="Leaderboard" 
          description="Check top players" 
          icon={<Trophy size={24} />} 
          color="bg-game-light"
          to="/leaderboard"
        />
        <QuickAction 
          title="Game Guides" 
          description="Learn game strategies" 
          icon={<BookOpen size={24} />} 
          color="bg-game-primary"
          to="/guides"
        />
        <QuickAction 
          title="Updates" 
          description="Latest game changes" 
          icon={<Bell size={24} />} 
          color="bg-game-accent"
          to="/updates"
        />
        <QuickAction 
          title="Community" 
          description="Connect with players" 
          icon={<Users size={24} />} 
          color="bg-game-dark"
          to="/faq"
        />
        <QuickAction 
          title="About" 
          description="Learn about Poki War" 
          icon={<Sparkles size={24} />} 
          color="bg-game-air"
          to="/about"
        />
      </div>
    </div>
  );
};

export default QuickActionsGrid;
