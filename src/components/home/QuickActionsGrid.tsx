
import React from "react";
import { Sword, Library, ShoppingBag, Info } from "lucide-react";
import QuickAction from "./QuickAction";

const QuickActionsGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <QuickAction 
        title="Battle" 
        description="Find opponents and battle" 
        icon={<Sword size={24} />} 
        color="bg-game-fire"
        to="/battle"
      />
      <QuickAction 
        title="Collection" 
        description="View your card collection" 
        icon={<Library size={24} />} 
        color="bg-game-water"
        to="/collection"
      />
      <QuickAction 
        title="Shop" 
        description="Buy new card packs" 
        icon={<ShoppingBag size={24} />} 
        color="bg-game-earth"
        to="/shop"
      />
      <QuickAction 
        title="About" 
        description="Learn about PokeWar" 
        icon={<Info size={24} />} 
        color="bg-game-light"
        to="/about"
      />
    </div>
  );
};

export default QuickActionsGrid;
