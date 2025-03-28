
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Search, ArrowUpRight, Crown } from "lucide-react";

const LeaderboardPage = () => {
  return (
    <GameLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Leaderboard</h1>
        <p className="text-gray-400">
          See how you stack up against the best players in the world.
        </p>
      </div>

      <Tabs defaultValue="global" className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <TabsList className="bg-white/5">
            <TabsTrigger value="global" className="data-[state=active]:bg-game-primary">
              Global
            </TabsTrigger>
            <TabsTrigger value="friends" className="data-[state=active]:bg-game-primary">
              Friends
            </TabsTrigger>
            <TabsTrigger value="seasonal" className="data-[state=active]:bg-game-primary">
              Seasonal
            </TabsTrigger>
          </TabsList>

          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search players..."
              className="pl-10 bg-white/5 border-white/10"
            />
          </div>
        </div>

        <TabsContent value="global" className="mt-0">
          <div className="glass-panel">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="col-span-2 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Top Players</h3>
                <div className="grid grid-cols-3 gap-4">
                  <TopPlayer
                    position={1}
                    name="DragonMaster"
                    avatar="/avatars/top1.png"
                    rank="Champion"
                    trophies={3845}
                  />
                  <TopPlayer
                    position={2}
                    name="ElementKing"
                    avatar="/avatars/top2.png"
                    rank="Grandmaster"
                    trophies={3721}
                  />
                  <TopPlayer
                    position={3}
                    name="CardWizard"
                    avatar="/avatars/top3.png"
                    rank="Grandmaster"
                    trophies={3690}
                  />
                </div>
              </div>

              <div className="col-span-2 md:col-span-1">
                <h3 className="text-xl font-bold mb-4">Your Ranking</h3>
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="bg-game-primary/20 w-8 h-8 rounded-full flex items-center justify-center text-game-primary font-bold mr-3">
                        125
                      </div>
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src="/avatars/avatar1.png" alt="Your avatar" />
                        <AvatarFallback>CM</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold">CardMaster</h4>
                        <div className="text-xs text-gray-400">Gold • Level 15</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-xl">1,245</div>
                      <div className="text-xs text-gray-400">Trophies</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">Next rank: Platinum</span>
                      <span className="text-game-primary">255 more trophies</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="bg-game-primary h-2 rounded-full"
                        style={{ width: "83%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Leaderboard Rankings</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 px-4 text-gray-400">Rank</th>
                    <th className="text-left py-3 px-4 text-gray-400">Player</th>
                    <th className="text-center py-3 px-4 text-gray-400">Wins</th>
                    <th className="text-center py-3 px-4 text-gray-400">Win Rate</th>
                    <th className="text-center py-3 px-4 text-gray-400">Level</th>
                    <th className="text-right py-3 px-4 text-gray-400">Trophies</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((player) => (
                    <tr
                      key={player.id}
                      className="border-b border-white/5 hover:bg-white/5"
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          {player.rank <= 3 ? (
                            <div
                              className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                player.rank === 1
                                  ? "bg-yellow-500"
                                  : player.rank === 2
                                  ? "bg-gray-400"
                                  : "bg-amber-700"
                              }`}
                            >
                              <Crown size={14} />
                            </div>
                          ) : (
                            <div className="text-center w-6">{player.rank}</div>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-2">
                            <AvatarImage src={player.avatar} alt={player.name} />
                            <AvatarFallback>
                              {player.name.substring(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{player.name}</div>
                            <div className="text-xs text-gray-400">{player.rankName}</div>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-3 px-4">{player.wins}</td>
                      <td className="text-center py-3 px-4">{player.winRate}%</td>
                      <td className="text-center py-3 px-4">
                        <div className="bg-game-primary/20 w-6 h-6 rounded-full flex items-center justify-center text-game-primary font-bold mx-auto">
                          {player.level}
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 font-bold">{player.trophies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between">
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                <Button
                  variant="outline"
                  className="border-white/10 hover:bg-white/5 w-8 h-8 p-0 bg-game-primary/10"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  className="border-white/10 hover:bg-white/5 w-8 h-8 p-0"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  className="border-white/10 hover:bg-white/5 w-8 h-8 p-0"
                >
                  3
                </Button>
                <span className="text-gray-400">...</span>
                <Button
                  variant="outline"
                  className="border-white/10 hover:bg-white/5 w-8 h-8 p-0"
                >
                  12
                </Button>
              </div>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Next
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="friends" className="mt-0">
          <div className="glass-panel">
            <div className="flex flex-col items-center justify-center py-12">
              <Trophy className="w-16 h-16 text-gray-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">No Friends Yet</h3>
              <p className="text-gray-400 mb-6 text-center max-w-md">
                Add friends to compare your progress and compete with them on the leaderboard.
              </p>
              <Button className="bg-game-primary hover:bg-game-primary/90">
                Add Friends
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="seasonal" className="mt-0">
          <div className="glass-panel">
            <div className="bg-gradient-to-r from-game-primary to-game-accent p-6 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Season 3: Elements Unleashed</h3>
                  <p className="text-gray-200">
                    Compete for exclusive rewards and seasonal cards!
                  </p>
                  <div className="flex items-center mt-4">
                    <div className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      <span>14 days remaining</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <img
                    src="/seasonal-card.png"
                    alt="Seasonal Card"
                    className="h-40 object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="text-center py-8">
              <Trophy className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Coming Soon</h3>
              <p className="text-gray-400 mb-6">
                Seasonal tournament rankings will appear once the season begins.
              </p>
              <Button className="bg-game-primary hover:bg-game-primary/90">
                <ArrowUpRight className="mr-2 w-4 h-4" />
                <span>Pre-register</span>
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </GameLayout>
  );
};

const TopPlayer = ({
  position,
  name,
  avatar,
  rank,
  trophies,
}: {
  position: number;
  name: string;
  avatar: string;
  rank: string;
  trophies: number;
}) => {
  const getBadgeColor = (position: number) => {
    switch (position) {
      case 1:
        return "bg-yellow-500";
      case 2:
        return "bg-gray-400";
      case 3:
        return "bg-amber-700";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="bg-white/5 rounded-lg p-4 flex flex-col items-center">
      <div className={`${getBadgeColor(position)} w-8 h-8 rounded-full flex items-center justify-center mb-2`}>
        <Crown size={16} />
      </div>
      <Avatar className="h-16 w-16 mb-2">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <h4 className="font-bold text-center">{name}</h4>
      <div className="text-xs text-gray-400 mb-2">{rank}</div>
      <div className="flex items-center">
        <Trophy className="w-4 h-4 text-yellow-500 mr-1" />
        <span className="font-bold">{trophies}</span>
      </div>
    </div>
  );
};

const leaderboardData = [
  {
    id: 1,
    rank: 1,
    name: "DragonMaster",
    avatar: "/avatars/top1.png",
    wins: 2145,
    winRate: 92,
    level: 50,
    trophies: 3845,
    rankName: "Champion",
  },
  {
    id: 2,
    rank: 2,
    name: "ElementKing",
    avatar: "/avatars/top2.png",
    wins: 1932,
    winRate: 88,
    level: 47,
    trophies: 3721,
    rankName: "Grandmaster",
  },
  {
    id: 3,
    rank: 3,
    name: "CardWizard",
    avatar: "/avatars/top3.png",
    wins: 1874,
    winRate: 85,
    level: 45,
    trophies: 3690,
    rankName: "Grandmaster",
  },
  {
    id: 4,
    rank: 4,
    name: "FireLord",
    avatar: "/avatars/player4.png",
    wins: 1543,
    winRate: 83,
    level: 42,
    trophies: 3542,
    rankName: "Master",
  },
  {
    id: 5,
    rank: 5,
    name: "IceQueen",
    avatar: "/avatars/player5.png",
    wins: 1489,
    winRate: 81,
    level: 40,
    trophies: 3487,
    rankName: "Master",
  },
  {
    id: 6,
    rank: 6,
    name: "StormBringer",
    avatar: "/avatars/player6.png",
    wins: 1356,
    winRate: 79,
    level: 38,
    trophies: 3321,
    rankName: "Diamond",
  },
  {
    id: 7,
    rank: 7,
    name: "ShadowWalker",
    avatar: "/avatars/player7.png",
    wins: 1287,
    winRate: 76,
    level: 35,
    trophies: 3165,
    rankName: "Diamond",
  },
  {
    id: 8,
    rank: 8,
    name: "NatureCaller",
    avatar: "/avatars/player8.png",
    wins: 1142,
    winRate: 74,
    level: 33,
    trophies: 2987,
    rankName: "Platinum",
  },
  {
    id: 9,
    rank: 9,
    name: "LightBringer",
    avatar: "/avatars/player9.png",
    wins: 1098,
    winRate: 72,
    level: 31,
    trophies: 2865,
    rankName: "Platinum",
  },
  {
    id: 10,
    rank: 10,
    name: "ThunderGod",
    avatar: "/avatars/player10.png",
    wins: 976,
    winRate: 70,
    level: 29,
    trophies: 2743,
    rankName: "Gold",
  },
];

export default LeaderboardPage;
