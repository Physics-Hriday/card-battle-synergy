
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useGameStore } from "@/utils/gameState";
import { packTypes, purchasePack, openPack } from "@/utils/shop";
import { Coins, Gem } from "lucide-react";

const ShopPage = () => {
  const { coins, gems, addCard } = useGameStore();

  const handlePurchase = (packType: PackType) => {
    if (purchasePack(packType, coins, gems)) {
      const cards = openPack(packType);
      cards.forEach(card => addCard(card));
    }
  };

  return (
    <GameLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Card Shop</h1>
        <p className="text-gray-400">Purchase card packs to expand your collection!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packTypes.map((pack) => (
          <Card key={pack.id} className="bg-black/20 border-white/10 backdrop-blur-sm">
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
                className="w-full bg-game-primary hover:bg-game-primary/90"
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
