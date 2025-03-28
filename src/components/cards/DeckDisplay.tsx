
import React from "react";
import { Deck } from "@/types/game";
import GameCard from "./GameCard";
import { cn } from "@/lib/utils";
import { Cards } from "lucide-react";

interface DeckDisplayProps {
  deck: Deck;
  onClick?: () => void;
  className?: string;
}

const DeckDisplay = ({ deck, onClick, className }: DeckDisplayProps) => {
  return (
    <div 
      className={cn(
        "relative group cursor-pointer rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-[3/4] bg-game-background rounded-xl overflow-hidden">
        {deck.coverCard ? (
          <GameCard card={deck.coverCard} size="lg" className="w-full h-full" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-game-background">
            <Cards className="w-16 h-16 text-game-primary opacity-50" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-bold text-lg mb-1 truncate">{deck.name}</h3>
          <p className="text-gray-300 text-sm">{deck.cards.length} cards</p>
        </div>
        
        <div className="absolute top-3 right-3 bg-game-background/80 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
          {deck.cards.length > 0 
            ? `${deck.cards.filter(c => c.element === 'fire').length > 0 ? '🔥' : ''}${deck.cards.filter(c => c.element === 'water').length > 0 ? '💧' : ''}${deck.cards.filter(c => c.element === 'earth').length > 0 ? '🌿' : ''}${deck.cards.filter(c => c.element === 'air').length > 0 ? '💨' : ''}${deck.cards.filter(c => c.element === 'light').length > 0 ? '✨' : ''}${deck.cards.filter(c => c.element === 'dark').length > 0 ? '🌑' : ''}`
            : 'Empty'
          }
        </div>
      </div>
    </div>
  );
};

export default DeckDisplay;
