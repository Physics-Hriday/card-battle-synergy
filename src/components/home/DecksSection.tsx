
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Library } from "lucide-react";
import DeckDisplay from "@/components/cards/DeckDisplay";
import { Deck } from "@/types/game";

interface DecksSectionProps {
  decks: Deck[];
}

const DecksSection = ({ decks }: DecksSectionProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Your Decks</h2>
        <Link to="/decks" className="text-game-primary hover:text-game-primary/80 flex items-center">
          <span>View All</span>
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {decks.map((deck) => (
          <DeckDisplay key={deck.id} deck={deck} />
        ))}
        <div className="aspect-[3/4] bg-white/5 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
          <Library className="w-12 h-12 text-white/50 mb-4" />
          <span className="font-bold text-white/70">Create New Deck</span>
        </div>
      </div>
    </div>
  );
};

export default DecksSection;
