
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import HeroSection from "@/components/home/HeroSection";
import PlayerStats from "@/components/home/PlayerStats";
import DecksSection from "@/components/home/DecksSection";
import QuickActionsGrid from "@/components/home/QuickActionsGrid";
import { mockPlayer, mockDecks } from "@/data/mockData";

const Home = () => {
  return (
    <GameLayout>
      <div className="flex flex-col space-y-8">
        {/* Hero section */}
        <HeroSection />

        {/* Player stats section */}
        <PlayerStats player={mockPlayer} />

        {/* Your decks section */}
        <DecksSection decks={mockDecks} />

        {/* Quick actions */}
        <QuickActionsGrid />
      </div>
    </GameLayout>
  );
};

export default Home;
