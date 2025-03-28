
import React, { useState } from "react";
import { Card as CardType } from "@/types/game";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Shield, Sword } from "lucide-react";

interface GameCardProps {
  card: CardType;
  onClick?: () => void;
  selectable?: boolean;
  selected?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const GameCard = ({
  card,
  onClick,
  selectable = false,
  selected = false,
  size = "md",
  className,
}: GameCardProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const sizeClasses = {
    sm: "w-32 h-44",
    md: "w-40 h-56",
    lg: "w-52 h-72",
  };

  const getElementColor = (element: string) => {
    const elementColors: Record<string, string> = {
      fire: "bg-game-fire",
      water: "bg-game-water",
      earth: "bg-game-earth",
      air: "bg-game-air",
      light: "bg-game-light",
      dark: "bg-game-dark",
    };
    return elementColors[element] || "bg-gray-500";
  };

  const getRarityBorder = (rarity: string) => {
    const rarityBorders: Record<string, string> = {
      common: "border-gray-400",
      uncommon: "border-green-500",
      rare: "border-blue-500",
      epic: "border-purple-500",
      legendary: "border-yellow-500",
    };
    return rarityBorders[rarity] || "border-gray-400";
  };

  const rarityGlow = {
    common: "",
    uncommon: "shadow-sm shadow-green-500/50",
    rare: "shadow-md shadow-blue-500/50",
    epic: "shadow-lg shadow-purple-500/50",
    legendary: "shadow-xl shadow-yellow-500/50",
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={cn(
              "card-frame relative transition-all duration-300 cursor-pointer",
              sizeClasses[size],
              getRarityBorder(card.rarity),
              rarityGlow[card.rarity as keyof typeof rarityGlow],
              {
                "transform hover:-translate-y-2": !selectable,
                "border-2 border-game-primary scale-105": selected,
                "opacity-75 hover:opacity-100": selectable && !selected,
              },
              className
            )}
            onClick={onClick}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Card image */}
            <div className="relative w-full h-full overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
              <img
                src={card.image || `/cards/placeholder.jpg`}
                alt={card.name}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Card frame */}
              <div className="absolute inset-0 flex flex-col justify-between p-2 z-20">
                {/* Top section */}
                <div className="flex justify-between items-start">
                  <div className="bg-black/60 text-white px-2 py-1 rounded-md flex items-center">
                    <span className="text-xs md:text-sm font-bold">{card.cost}</span>
                  </div>
                  <div className={`${getElementColor(card.element)} w-6 h-6 rounded-full flex items-center justify-center text-white text-xs`}>
                    {card.element[0].toUpperCase()}
                  </div>
                </div>

                {/* Bottom section */}
                <div className="mt-auto">
                  <h3 className="text-white text-xs md:text-sm font-bold mb-1 truncate">
                    {card.name}
                  </h3>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center text-white bg-black/60 px-2 py-1 rounded-md">
                      <Sword className="w-3 h-3 mr-1" />
                      <span className="text-xs font-bold">{card.attack}</span>
                    </div>
                    <div className="flex items-center text-white bg-black/60 px-2 py-1 rounded-md">
                      <Shield className="w-3 h-3 mr-1" />
                      <span className="text-xs font-bold">{card.defense}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="w-64 p-0 overflow-hidden rounded-lg border-0">
          <div className="bg-game-background text-white p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">{card.name}</h3>
              <div className={`${getElementColor(card.element)} px-2 py-1 rounded-md text-xs text-white`}>
                {card.element.charAt(0).toUpperCase() + card.element.slice(1)}
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-3">{card.description}</p>
            <div className="flex justify-between mb-3">
              <div className="flex items-center">
                <Sword className="w-4 h-4 mr-1 text-game-accent" />
                <span>{card.attack}</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 mr-1 text-game-secondary" />
                <span>{card.defense}</span>
              </div>
              <div className="bg-game-primary px-2 py-1 rounded-md text-xs">
                Cost: {card.cost}
              </div>
            </div>
            {card.abilities.length > 0 && (
              <div className="mt-3 border-t border-white/20 pt-3">
                <h4 className="font-bold text-sm mb-2">Abilities:</h4>
                {card.abilities.map((ability) => (
                  <div key={ability.id} className="text-xs mb-2">
                    <div className="font-bold text-game-secondary">
                      {ability.name} (Cost: {ability.cost})
                    </div>
                    <p className="text-gray-300">{ability.description}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="text-right mt-2">
              <span className="text-xs text-gray-400 capitalize">{card.rarity}</span>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GameCard;
