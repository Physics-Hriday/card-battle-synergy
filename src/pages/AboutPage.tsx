
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Twitter } from "lucide-react";

const AboutPage = () => {
  return (
    <GameLayout>
      <div className="glass-panel mb-8">
        <h1 className="text-4xl font-bold mb-4">About Poki War</h1>
        <p className="text-lg text-gray-300 mb-6">
          Poki War is a strategic card battle game inspired by Pokémon, featuring collectible cards, 
          deck-building, and competitive gameplay. Players can build their own decks with unique elemental 
          synergies, battle other players, and climb the leaderboards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Game Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Collect cards with unique abilities and elements</li>
              <li>Build custom decks with strategic synergies</li>
              <li>Battle against other players in real-time</li>
              <li>Climb the competitive leaderboard</li>
              <li>Earn rewards and unlock new cards</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Game Elements</h2>
            <div className="grid grid-cols-3 gap-4">
              <ElementCard name="Fire" emoji="🔥" color="bg-game-fire" />
              <ElementCard name="Water" emoji="💧" color="bg-game-water" />
              <ElementCard name="Earth" emoji="🌿" color="bg-game-earth" />
              <ElementCard name="Air" emoji="💨" color="bg-game-air" />
              <ElementCard name="Light" emoji="✨" color="bg-game-light" />
              <ElementCard name="Dark" emoji="🌑" color="bg-game-dark" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Development Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <DeveloperCard
            name="Hriday Kadam"
            role="Lead Developer"
            bio="Passionate game developer with expertise in React and TypeScript."
            twitter="@hridaykadam"
          />
        </div>
      </div>
    </GameLayout>
  );
};

const ElementCard = ({ name, emoji, color }: { name: string; emoji: string; color: string }) => (
  <div className={`${color} rounded-lg p-4 text-center transition-transform hover:scale-105`}>
    <div className="text-3xl mb-2">{emoji}</div>
    <div className="font-bold">{name}</div>
  </div>
);

const DeveloperCard = ({ 
  name, 
  role, 
  bio, 
  twitter 
}: { 
  name: string; 
  role: string; 
  bio: string; 
  twitter: string; 
}) => (
  <Card className="bg-white/5 border-white/10 overflow-hidden">
    <CardHeader className="pb-2">
      <div className="bg-gradient-to-r from-game-primary to-game-secondary h-24 w-full absolute top-0 left-0 rounded-t-lg"></div>
      <div className="w-24 h-24 rounded-lg bg-white/10 relative mx-auto mt-6 overflow-hidden flex items-center justify-center">
        <div className="w-full h-full bg-game-background flex items-center justify-center">
          <div className="text-4xl">🎮</div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mt-2">{name}</h3>
      <p className="text-gray-400 text-center">{role}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300 text-center">{bio}</p>
      <p className="text-game-primary text-center mt-2">{twitter}</p>
    </CardContent>
    <CardFooter className="flex justify-center gap-4 pt-2">
      <Button variant="outline" size="icon" className="rounded-full">
        <Github className="h-4 w-4" />
      </Button>
      <a href={`https://twitter.com/${twitter.slice(1)}`} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="rounded-full">
          <Twitter className="h-4 w-4" />
        </Button>
      </a>
      <Button variant="outline" size="icon" className="rounded-full">
        <Mail className="h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

export default AboutPage;
