
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useGameStore } from "@/utils/gameState";
import { packTypes, openPack, PackType } from "@/utils/shop";
import { Coins, Gem } from "lucide-react";
import { toast } from "sonner";

const ShopPage = () => {
  const { coins, gems, addCard } = useGameStore();

  const handlePurchase = (packType: PackType) => {
    if (packType.currency === 'coins' && coins < packType.cost) {
      toast.error('Not enough coins!');
      return;
    }
    
    if (packType.currency === 'gems' && gems < packType.cost) {
      toast.error('Not enough gems!');
      return;
    }
    
    // Use the store's purchaseCardPack method
    const success = packType.currency === 'coins' 
      ? useGameStore.getState().purchaseCardPack(packType.cost, packType.name)
      : useGameStore.getState().purchaseCardPack(packType.cost * 100, packType.name); // Gems are more valuable

    if (success) {
      const cards = openPack(packType);
      cards.forEach(card => {
        addCard(card);
        toast.info(`You got: ${card.name} (${card.rarity})`, {
          style: {
            background: getBackgroundForRarity(card.rarity),
            color: '#fff',
          }
        });
      });
    }
  };

  const getBackgroundForRarity = (rarity: string) => {
    switch (rarity) {
      case 'common': return '#888888';
      case 'uncommon': return '#25a55f';
      case 'rare': return '#3d85e8';
      case 'epic': return '#b026ff';
      case 'legendary': return '#ff8c00';
      default: return '#888888';
    }
  };

  return (
    <GameLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Card Shop</h1>
        <p className="text-gray-400">Purchase card packs to expand your collection!</p>
      </div>

      <div className="flex justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <Coins className="w-5 h-5 text-game-accent" />
            <span className="font-bold">{coins}</span>
            <span className="text-gray-400">Coins</span>
          </div>
          
          <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full">
            <Gem className="w-5 h-5 text-game-primary" />
            <span className="font-bold">{gems}</span>
            <span className="text-gray-400">Gems</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packTypes.map((pack) => (
          <Card key={pack.id} className="bg-black/20 border-white/10 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-white">{pack.name}</CardTitle>
              <CardDescription className="text-gray-400">{pack.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-white flex items-center">
                {pack.currency === 'coins' ? (
                  <><Coins className="w-5 h-5 mr-2 text-game-accent" />{pack.cost}</>
                ) : (
                  <><Gem className="w-5 h-5 mr-2 text-game-primary" />{pack.cost}</>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handlePurchase(pack)}
                className={`w-full ${pack.currency === 'coins' ? 'bg-game-accent hover:bg-game-accent/90' : 'bg-game-primary hover:bg-game-primary/90'}`}
              >
                Purchase Pack
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </GameLayout>
  );
};

export default ShopPage;
