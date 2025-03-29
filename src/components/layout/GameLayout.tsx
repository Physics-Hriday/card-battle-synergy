
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

interface GameLayoutProps {
  children: React.ReactNode;
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return (
    <TooltipProvider>
      <div className="min-h-screen bg-game-background text-white flex flex-col">
        <Navbar />
        <main className="game-container py-8 flex-grow">{children}</main>
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default GameLayout;
