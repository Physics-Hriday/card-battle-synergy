
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Book, ExternalLink, FileText, Sword, Shield, Zap } from "lucide-react";

const GuidesPage = () => {
  return (
    <GameLayout>
      <div className="glass-panel mb-8">
        <h1 className="text-3xl font-bold mb-4">Game Guides</h1>
        <p className="text-gray-300">
          Master Poki War with our comprehensive guides. Learn strategies, card combinations, and battle techniques to dominate the leaderboards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GuideCard
          title="Beginner's Guide"
          description="Everything you need to know to get started with Poki War. Learn the basics of card battles, deck building, and game mechanics."
          icon={<Book className="w-10 h-10 text-game-primary" />}
          category="Basics"
          readTime="10 min read"
        />
        <GuideCard
          title="Advanced Battle Strategies"
          description="Take your gameplay to the next level with advanced tactics. Learn how to counter popular decks and utilize complex card synergies."
          icon={<Sword className="w-10 h-10 text-game-accent" />}
          category="Battle"
          readTime="15 min read"
        />
        <GuideCard
          title="Deck Building Masterclass"
          description="Discover the principles of effective deck construction. Balance your elements, optimize your mana curve, and create unbeatable combinations."
          icon={<FileText className="w-10 h-10 text-game-secondary" />}
          category="Strategy"
          readTime="12 min read"
        />
        <GuideCard
          title="Element Synergies Explained"
          description="Deep dive into the elemental system. Learn which elements work best together and how to exploit elemental weaknesses."
          icon={<Zap className="w-10 h-10 text-game-fire" />}
          category="Elements"
          readTime="8 min read"
        />
        <GuideCard
          title="Climbing the Ranks"
          description="Strategic advice for competitive play. Learn how to analyze the meta, adapt your playstyle, and rise through the leaderboards."
          icon={<Shield className="w-10 h-10 text-game-water" />}
          category="Competitive"
          readTime="14 min read"
        />
        <GuideCard
          title="Card Collection Tips"
          description="Optimize your card acquisition strategy. Learn the most efficient ways to expand your collection without spending a fortune."
          icon={<Book className="w-10 h-10 text-game-earth" />}
          category="Collection"
          readTime="9 min read"
        />
      </div>

      <div className="glass-panel mt-8">
        <h2 className="text-2xl font-bold mb-4">Video Tutorials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/30 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <Book className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">Beginner's Tutorial Video</p>
              <Button className="mt-4 bg-game-primary hover:bg-game-primary/90">
                <ExternalLink className="mr-2 w-4 h-4" />
                <span>Watch on YouTube</span>
              </Button>
            </div>
          </div>
          <div className="bg-black/30 rounded-lg aspect-video flex items-center justify-center">
            <div className="text-center">
              <Book className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">Advanced Strategies Video</p>
              <Button className="mt-4 bg-game-primary hover:bg-game-primary/90">
                <ExternalLink className="mr-2 w-4 h-4" />
                <span>Watch on YouTube</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

const GuideCard = ({
  title,
  description,
  icon,
  category,
  readTime,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  readTime: string;
}) => (
  <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
    <CardHeader>
      <div className="flex items-start">
        <div className="mr-4">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex items-center mt-1 space-x-3">
            <span className="bg-game-primary/20 text-game-primary px-2 py-1 rounded-full text-xs">
              {category}
            </span>
            <span className="text-xs text-gray-400">{readTime}</span>
          </div>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300">{description}</p>
    </CardContent>
    <CardFooter>
      <Button className="w-full bg-white/10 hover:bg-white/20">
        Read Guide
      </Button>
    </CardFooter>
  </Card>
);

export default GuidesPage;
