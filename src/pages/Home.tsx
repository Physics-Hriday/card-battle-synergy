
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import HeroSection from "@/components/home/HeroSection";
import PlayerStats from "@/components/home/PlayerStats";
import DecksSection from "@/components/home/DecksSection";
import QuickActionsGrid from "@/components/home/QuickActionsGrid";
import { useGameStore } from "@/utils/gameState";

const Home = () => {
  const { player, decks } = useGameStore();

  return (
    <GameLayout>
      <div className="flex flex-col space-y-8">
        {/* Hero section */}
        <HeroSection />

        {/* Player stats section */}
        <PlayerStats player={player} />

        {/* Your decks section */}
        <DecksSection decks={decks} />

        {/* Quick actions */}
        <QuickActionsGrid />
      </div>
    </GameLayout>
  );
};

export default Home;
