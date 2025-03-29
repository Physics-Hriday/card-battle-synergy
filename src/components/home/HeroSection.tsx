
import React from "react";
import { Button } from "@/components/ui/button";
import { Sword, Library } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="glass-panel">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-game-primary">Poki</span>
            <span className="text-game-accent ml-1">War</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Build your deck, master the elements, and challenge players from around the world in strategic card battles!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="btn-primary flex items-center gap-2">
              <Sword size={18} />
              <span>Quick Battle</span>
            </Button>
            <Button variant="outline" className="border-game-primary text-game-primary hover:bg-game-primary/10 flex items-center gap-2">
              <Library size={18} />
              <span>Build Deck</span>
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-48 h-64 bg-game-fire/20 rounded-lg blur-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-48 h-64 bg-game-water/20 rounded-lg blur-lg animate-pulse"></div>
            <img 
              src="/cards/c1.png" 
              alt="Featured Card" 
              className="w-56 h-80 object-cover rounded-lg z-10 relative hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
