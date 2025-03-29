
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Zap, Bug, Gift } from "lucide-react";

const UpdatesPage = () => {
  return (
    <GameLayout>
      <div className="glass-panel mb-8">
        <h1 className="text-3xl font-bold mb-4">Game Updates</h1>
        <p className="text-gray-300">
          Stay informed about the latest changes, new features, balance updates, and bug fixes for Poki War.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-white/10 z-0"></div>
        
        <div className="space-y-12">
          <UpdateEntry 
            version="1.3.0" 
            date="July 15, 2023" 
            title="The Elemental Masters Update"
            type="major"
          >
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="New Card Set: Elemental Masters"
              description="Added 20 new cards themed around elemental mastery with unique abilities that manipulate the battlefield."
            />
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Ranked Season 3 Launch"
              description="The third competitive season begins with new rewards, including exclusive card backs and avatars."
            />
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="New Game Mode: Draft Arena"
              description="Test your adaptability in this new game mode where you build your deck from a random selection of cards."
            />
            <UpdateFeature 
              icon={<Bug size={18} />} 
              title="Balance Changes"
              description="Adjusted the power level of Fire element cards to better balance their effectiveness against Water element cards."
            />
            <UpdateFeature 
              icon={<Bug size={18} />} 
              title="Bug Fixes"
              description="Fixed several issues with card interactions and visual glitches during battle animations."
            />
          </UpdateEntry>

          <UpdateEntry 
            version="1.2.5" 
            date="June 1, 2023" 
            title="Quality of Life Improvements"
            type="minor"
          >
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Deck Builder Improvements"
              description="Enhanced the deck building interface with better filtering, sorting, and stat visualization."
            />
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Friend System Expansion"
              description="Added ability to spectate friends' battles and challenge them directly from the friends list."
            />
            <UpdateFeature 
              icon={<Bug size={18} />} 
              title="Performance Optimization"
              description="Improved loading times and reduced memory usage across all platforms."
            />
          </UpdateEntry>

          <UpdateEntry 
            version="1.2.0" 
            date="May 10, 2023" 
            title="The Dark Elements Expansion"
            type="major"
          >
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="New Element: Dark"
              description="Introduced the Dark element with 15 new cards focusing on control and resource manipulation."
            />
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Story Mode: Chapter 3"
              description="Continue your journey with new single-player missions and story developments."
            />
            <UpdateFeature 
              icon={<Gift size={18} />} 
              title="Anniversary Celebration"
              description="Login rewards and special events to celebrate Poki War's first anniversary."
            />
          </UpdateEntry>

          <UpdateEntry 
            version="1.1.0" 
            date="March 15, 2023" 
            title="The Tournament Update"
            type="major"
          >
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Tournament Mode"
              description="Participate in regularly scheduled in-game tournaments with special rules and rewards."
            />
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Leaderboard Revamp"
              description="Enhanced leaderboard system with more detailed statistics and seasonal tracking."
            />
            <UpdateFeature 
              icon={<Bug size={18} />} 
              title="Balance Changes"
              description="Adjusted 12 cards to ensure competitive balance across all elements."
            />
          </UpdateEntry>

          <UpdateEntry 
            version="1.0.0" 
            date="January 1, 2023" 
            title="Official Launch"
            type="major"
          >
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Full Release"
              description="Poki War leaves beta and officially launches with all core features implemented."
            />
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Ranked Mode"
              description="Competitive play begins with the first ranked season and exclusive rewards."
            />
            <UpdateFeature 
              icon={<Zap size={18} />} 
              title="Full Card Collection"
              description="All 150 base set cards are now available to collect and play."
            />
          </UpdateEntry>
        </div>
      </div>
    </GameLayout>
  );
};

const UpdateEntry = ({ 
  version, 
  date, 
  title, 
  type, 
  children 
}: { 
  version: string;
  date: string;
  title: string;
  type: "major" | "minor" | "patch";
  children: React.ReactNode;
}) => (
  <div className="relative z-10">
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-white/5 rounded-full w-8 h-8 flex items-center justify-center border border-white/10 z-10 mr-6">
        <span className="w-3 h-3 bg-game-primary rounded-full"></span>
      </div>
      <div className="glass-panel flex-grow">
        <div className="flex flex-wrap items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold flex items-center">
              {title} <span className="text-gray-400 ml-2 text-base">v{version}</span>
            </h2>
            <p className="text-gray-400 text-sm">{date}</p>
          </div>
          <Badge className={`
            ${type === "major" ? "bg-game-primary" : type === "minor" ? "bg-game-accent" : "bg-gray-500"}
          `}>
            {type === "major" ? "Major Update" : type === "minor" ? "Minor Update" : "Patch"}
          </Badge>
        </div>
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const UpdateFeature = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div>
    <div className="flex items-center mb-1">
      <div className="mr-2 text-game-accent">{icon}</div>
      <h3 className="font-bold">{title}</h3>
    </div>
    <p className="text-gray-300 ml-7">{description}</p>
    <Separator className="mt-4 bg-white/5" />
  </div>
);

export default UpdatesPage;
