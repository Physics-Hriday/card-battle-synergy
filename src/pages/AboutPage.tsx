
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin } from "lucide-react";

const AboutPage = () => {
  return (
    <GameLayout>
      <div className="glass-panel mb-8">
        <h1 className="text-4xl font-bold mb-4">About Poki War</h1>
        <p className="text-lg text-gray-300 mb-6">
          Poki War is a strategic card battle game featuring collectible cards, 
          deck-building, and competitive gameplay. Players can build their own decks with unique elemental 
          synergies, battle other players, and climb the leaderboards.
        </p>
        
        <div className="relative overflow-hidden rounded-xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-game-primary to-game-accent opacity-20"></div>
          <div className="relative z-10 p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-3/5">
                <h2 className="text-3xl font-bold mb-4">Game Overview</h2>
                <p className="text-lg text-gray-300 mb-4">
                  Poki War combines strategic deck-building with fast-paced battles. Choose your cards wisely, 
                  understand elemental advantages, and outsmart your opponents to climb the ranks.
                </p>
                <p className="text-lg text-gray-300">
                  With regular updates, new cards, and special events, there's always something 
                  new to discover in the world of Poki War.
                </p>
              </div>
              <div className="w-full md:w-2/5 flex justify-center">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-48 h-64 bg-game-fire/20 rounded-lg blur-lg animate-pulse"></div>
                  <div className="absolute -bottom-4 -right-4 w-48 h-64 bg-game-water/20 rounded-lg blur-lg animate-pulse"></div>
                  <img 
                    src="/cards/c1.png" 
                    alt="Featured Card" 
                    className="w-56 h-80 object-cover rounded-lg z-10 relative hover:scale-105 transition-transform"
                    onError={(e) => {
                      e.currentTarget.src = "/cards/placeholder.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Game Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Collect cards with unique abilities and elements</li>
              <li>Build custom decks with strategic synergies</li>
              <li>Battle against other players in real-time</li>
              <li>Climb the competitive leaderboard</li>
              <li>Earn rewards and unlock new cards</li>
              <li>Regular updates with new content</li>
              <li>Special in-game events and tournaments</li>
              <li>Community challenges and rewards</li>
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
        <div className="flex justify-center">
          <DeveloperCard
            name="Hriday Kadam"
            role="Lead Developer"
            bio="Passionate game developer with expertise in React and TypeScript. Creator of Poki War and dedicated to delivering immersive gaming experiences."
            linkedin="https://www.linkedin.com/in/hridaykadam/"
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
  linkedin 
}: { 
  name: string; 
  role: string; 
  bio: string; 
  linkedin: string; 
}) => (
  <Card className="bg-white/5 border-white/10 overflow-hidden max-w-md">
    <CardHeader className="pb-2">
      <div className="bg-gradient-to-r from-game-primary to-game-secondary h-24 w-full absolute top-0 left-0 rounded-t-lg"></div>
      <div className="w-24 h-24 rounded-lg bg-white/10 relative mx-auto mt-6 overflow-hidden flex items-center justify-center">
        <div className="w-full h-full bg-game-background flex items-center justify-center">
          <div className="text-4xl">👨‍💻</div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-center mt-2">{name}</h3>
      <p className="text-gray-400 text-center">{role}</p>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300 text-center">{bio}</p>
    </CardContent>
    <CardFooter className="flex justify-center gap-4 pt-2">
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <Button variant="outline" size="icon" className="rounded-full">
          <Linkedin className="h-4 w-4" />
        </Button>
      </a>
      <Button variant="outline" size="icon" className="rounded-full">
        <Github className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" className="rounded-full">
        <Mail className="h-4 w-4" />
      </Button>
    </CardFooter>
  </Card>
);

export default AboutPage;
