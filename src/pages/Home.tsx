
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GameLayout from "@/components/layout/GameLayout";
import DeckDisplay from "@/components/cards/DeckDisplay";
import { mockPlayer, mockDecks } from "@/data/mockData";
import { Sword, Library, Trophy, ShoppingBag, Users, ArrowRight, Zap } from "lucide-react";

const Home = () => {
  return (
    <GameLayout>
      <div className="flex flex-col space-y-8">
        {/* Hero section */}
        <div className="glass-panel">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to <span className="text-game-primary">Synergy</span>
                <span className="text-game-accent">Clash</span>
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
                  className="w-56 h-80 object-cover rounded-lg z-10 relative"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Player stats section */}
        <div className="glass-panel">
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <img 
                src={mockPlayer.avatar} 
                alt="Player Avatar" 
                className="w-16 h-16 rounded-full border-2 border-game-primary"
              />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-game-primary text-white text-xs rounded-full flex items-center justify-center">
                {mockPlayer.level}
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">{mockPlayer.username}</h2>
              <div className="flex items-center text-sm text-gray-300">
                <span className="bg-game-primary/20 text-game-primary px-2 py-1 rounded-full text-xs mr-2">
                  {mockPlayer.stats.rankName}
                </span>
                <span>
                  {mockPlayer.stats.wins}W / {mockPlayer.stats.losses}L ({mockPlayer.stats.winRate}% win rate)
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard 
              title="Current Rank" 
              value={mockPlayer.stats.rankName} 
              icon={<Trophy className="text-yellow-500" />} 
            />
            <StatCard 
              title="Total Battles" 
              value={mockPlayer.stats.totalGames.toString()} 
              icon={<Sword className="text-game-accent" />} 
            />
            <StatCard 
              title="Cards Owned" 
              value={mockPlayer.collection.length.toString()} 
              icon={<Library className="text-game-secondary" />} 
            />
            <StatCard 
              title="Win Rate" 
              value={`${mockPlayer.stats.winRate}%`} 
              icon={<Zap className="text-game-primary" />} 
            />
          </div>
        </div>

        {/* Your decks section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Decks</h2>
            <Link to="/decks" className="text-game-primary hover:text-game-primary/80 flex items-center">
              <span>View All</span>
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {mockDecks.map((deck) => (
              <DeckDisplay key={deck.id} deck={deck} />
            ))}
            <div className="aspect-[3/4] bg-white/5 border-2 border-dashed border-white/20 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
              <Library className="w-12 h-12 text-white/50 mb-4" />
              <span className="font-bold text-white/70">Create New Deck</span>
            </div>
          </div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <QuickAction 
            title="Battle" 
            description="Find opponents and battle" 
            icon={<Sword size={24} />} 
            color="bg-game-fire"
            to="/battle"
          />
          <QuickAction 
            title="Collection" 
            description="View your card collection" 
            icon={<Library size={24} />} 
            color="bg-game-water"
            to="/collection"
          />
          <QuickAction 
            title="Shop" 
            description="Buy new card packs" 
            icon={<ShoppingBag size={24} />} 
            color="bg-game-earth"
            to="/shop"
          />
          <QuickAction 
            title="Leaderboard" 
            description="See top players" 
            icon={<Trophy size={24} />} 
            color="bg-game-light"
            to="/leaderboard"
          />
        </div>
      </div>
    </GameLayout>
  );
};

const StatCard = ({ 
  title, 
  value, 
  icon 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode 
}) => (
  <div className="bg-white/5 rounded-lg p-4">
    <div className="flex items-center mb-2">
      <div className="mr-2">{icon}</div>
      <h3 className="text-sm text-gray-300">{title}</h3>
    </div>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const QuickAction = ({ 
  title, 
  description, 
  icon, 
  color, 
  to 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  color: string;
  to: string;
}) => (
  <Link to={to} className="group relative overflow-hidden rounded-xl bg-white/5 p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
    <div className={`absolute top-0 right-0 w-16 h-16 ${color} opacity-10 rounded-bl-full`}></div>
    <div className="flex flex-col h-full">
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
      <div className="mt-auto pt-4 flex items-center text-sm text-game-primary">
        <span>Get started</span>
        <ArrowRight size={16} className="ml-1 transform transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);

export default Home;
