
import React from "react";
import Navbar from "./Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

interface GameLayoutProps {
  children: React.ReactNode;
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-game-background text-white">
        <Navbar />
        <main className="game-container py-8">{children}</main>
      </div>
    </TooltipProvider>
  );
};

export default GameLayout;
