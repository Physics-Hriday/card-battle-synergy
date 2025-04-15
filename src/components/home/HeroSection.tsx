
import React from "react";
import { Button } from "@/components/ui/button";
import { Sword, Library, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden rounded-xl glass-panel">
      {/* Background effects */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-game-primary opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-game-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
        <div className="flex-1">
          <div className="mb-2 inline-block px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-game-primary">
            Ready for Battle
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-game-primary">Poki</span>
            <span className="text-game-accent ml-1">War</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Build your deck, master the elements, and challenge players from around the world in strategic card battles!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/battle">
              <Button className="btn-primary flex items-center gap-2 group">
                <Sword size={18} className="group-hover:rotate-12 transition-transform" />
                <span>Quick Battle</span>
              </Button>
            </Link>
            <Link to="/collection">
              <Button variant="outline" className="border-game-primary text-game-primary hover:bg-game-primary/10 flex items-center gap-2 group">
                <Library size={18} className="group-hover:scale-110 transition-transform" />
                <span>Build Deck</span>
              </Button>
            </Link>
            <Link to="/leaderboard">
              <Button variant="ghost" className="text-white/80 hover:text-white flex items-center gap-2 group">
                <Trophy size={18} className="group-hover:translate-y-[-2px] transition-transform" />
                <span>Leaderboard</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-48 h-64 bg-game-fire/20 rounded-lg blur-lg animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-48 h-64 bg-game-water/20 rounded-lg blur-lg animate-pulse"></div>
            <img 
              src="/cards/c1.png" 
              alt="Featured Card" 
              className="w-56 h-80 object-cover rounded-lg z-10 relative hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-game-primary/20"
              onError={(e) => {
                e.currentTarget.src = "/cards/placeholder.jpg";
              }}
            />
            <div className="absolute top-4 right-4 w-12 h-12 bg-game-fire rounded-full flex items-center justify-center text-2xl animate-bounce">
              🔥
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom stats bar */}
      <div className="flex flex-wrap justify-between mt-8 pt-4 border-t border-white/10 text-sm">
        <div className="px-4 py-2">
          <span className="text-gray-400">Active Players:</span>
          <span className="ml-2 font-bold">12,458</span>
        </div>
        <div className="px-4 py-2">
          <span className="text-gray-400">Battles Today:</span>
          <span className="ml-2 font-bold">5,236</span>
        </div>
        <div className="px-4 py-2">
          <span className="text-gray-400">Cards Released:</span>
          <span className="ml-2 font-bold">350+</span>
        </div>
        <div className="px-4 py-2">
          <span className="text-gray-400">Top Prize Pool:</span>
          <span className="ml-2 font-bold text-game-accent">₵10,000</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
