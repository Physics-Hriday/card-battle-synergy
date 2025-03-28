
import React, { useState } from "react";
import GameLayout from "@/components/layout/GameLayout";
import CardGrid from "@/components/cards/CardGrid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { mockCards } from "@/data/mockData";
import { Search, Filter, Sword, Shield } from "lucide-react";
import { Card as CardType, ElementType, CardRarity } from "@/types/game";

const CollectionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [elementFilter, setElementFilter] = useState<ElementType | "all">("all");
  const [rarityFilter, setRarityFilter] = useState<CardRarity | "all">("all");
  const [sortBy, setSortBy] = useState<"name" | "cost" | "attack" | "defense">("name");
  
  const filteredCards = mockCards.filter(card => {
    // Search filter
    if (searchTerm && !card.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Element filter
    if (elementFilter !== "all" && card.element !== elementFilter) {
      return false;
    }
    
    // Rarity filter
    if (rarityFilter !== "all" && card.rarity !== rarityFilter) {
      return false;
    }
    
    return true;
  });
  
  const sortedCards = [...filteredCards].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "cost":
        return a.cost - b.cost;
      case "attack":
        return b.attack - a.attack;
      case "defense":
        return b.defense - a.defense;
      default:
        return 0;
    }
  });
  
  const handleCardClick = (card: CardType) => {
    console.log("Card clicked:", card);
  };

  return (
    <GameLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Your Collection</h1>
        <p className="text-gray-400">
          Browse, filter, and search through all the cards you've collected.
        </p>
      </div>
      
      <div className="glass-panel mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/5 border-white/10"
            />
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="w-40">
              <Select
                value={elementFilter}
                onValueChange={(value) => setElementFilter(value as ElementType | "all")}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Element" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Elements</SelectItem>
                  <SelectItem value="fire">Fire</SelectItem>
                  <SelectItem value="water">Water</SelectItem>
                  <SelectItem value="earth">Earth</SelectItem>
                  <SelectItem value="air">Air</SelectItem>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-40">
              <Select
                value={rarityFilter}
                onValueChange={(value) => setRarityFilter(value as CardRarity | "all")}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Rarity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Rarities</SelectItem>
                  <SelectItem value="common">Common</SelectItem>
                  <SelectItem value="uncommon">Uncommon</SelectItem>
                  <SelectItem value="rare">Rare</SelectItem>
                  <SelectItem value="epic">Epic</SelectItem>
                  <SelectItem value="legendary">Legendary</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="w-40">
              <Select
                value={sortBy}
                onValueChange={(value) => setSortBy(value as "name" | "cost" | "attack" | "defense")}
              >
                <SelectTrigger className="bg-white/5 border-white/10">
                  <SelectValue placeholder="Sort By" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="cost">Cost</SelectItem>
                  <SelectItem value="attack">
                    <div className="flex items-center">
                      <Sword className="w-4 h-4 mr-1" />
                      <span>Attack</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="defense">
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 mr-1" />
                      <span>Defense</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button variant="outline" className="border-white/10 hover:bg-white/5">
              <Filter className="mr-2 w-4 h-4" />
              <span>More Filters</span>
            </Button>
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Showing {sortedCards.length} of {mockCards.length} cards
          </div>
          
          <div className="flex gap-2">
            <Badge value={elementFilter !== "all" ? 1 : 0} label="Element" />
            <Badge value={rarityFilter !== "all" ? 1 : 0} label="Rarity" />
            <Badge value={searchTerm ? 1 : 0} label="Search" />
          </div>
        </div>
      </div>
      
      <CardGrid cards={sortedCards} onCardClick={handleCardClick} />
    </GameLayout>
  );
};

const Badge = ({ value, label }: { value: number; label: string }) => {
  if (value === 0) return null;
  
  return (
    <div className="bg-game-primary/20 text-game-primary px-2 py-1 rounded-full text-xs flex items-center">
      <span>{label}</span>
      <div className="ml-1 w-4 h-4 bg-game-primary text-white rounded-full flex items-center justify-center text-xs">
        {value}
      </div>
    </div>
  );
};

export default CollectionPage;
