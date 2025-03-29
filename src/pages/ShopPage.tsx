
import React from "react";
import GameLayout from "@/components/layout/GameLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ShoppingBag, Package, Sparkles, Flame, Gem, Coins } from "lucide-react";
import { mockPlayer } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const ShopPage = () => {
  const { toast } = useToast();

  const handlePurchase = (packName: string, price: number) => {
    toast({
      title: "Card Pack Purchased!",
      description: `You have successfully purchased ${packName}.`,
      variant: "default",
    });
  };

  return (
    <GameLayout>
      <div className="flex flex-col space-y-8">
        <div className="glass-panel">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Card Shop</h1>
              <p className="text-gray-400">Purchase card packs to expand your collection</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                <Coins className="text-game-accent mr-2" size={20} />
                <span className="font-bold">{mockPlayer.coins} Coins</span>
              </div>
              <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                <Gem className="text-game-primary mr-2" size={20} />
                <span className="font-bold">{mockPlayer.gems} Gems</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Featured Packs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <PackCard
              title="Starter Pack"
              description="Perfect for beginners. Contains 5 common cards and 1 rare card."
              price={500}
              currency="coins"
              icon={<Package size={24} />}
              bgColor="bg-gradient-to-br from-blue-500 to-purple-600"
              onPurchase={() => handlePurchase("Starter Pack", 500)}
            />
            <PackCard
              title="Element Pack"
              description="Focused on a specific element. Contains 3 elemental cards with 1 guaranteed epic."
              price={1000}
              currency="coins"
              icon={<Flame size={24} />}
              bgColor="bg-gradient-to-br from-orange-500 to-red-600"
              onPurchase={() => handlePurchase("Element Pack", 1000)}
            />
            <PackCard
              title="Premium Pack"
              description="High-quality cards. Contains 5 cards with at least 2 rare and 1 epic."
              price={200}
              currency="gems"
              icon={<Sparkles size={24} />}
              bgColor="bg-gradient-to-br from-yellow-400 to-yellow-600"
              onPurchase={() => handlePurchase("Premium Pack", 200)}
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpecialOfferCard
              title="Legendary Bundle"
              description="Special bundle with a guaranteed legendary card. Limited time offer!"
              originalPrice={1000}
              discountPrice={750}
              currency="gems"
              discount={25}
              onPurchase={() => handlePurchase("Legendary Bundle", 750)}
            />
            <SpecialOfferCard
              title="Elements Mega Pack"
              description="Contains cards from all elements with multiple epics and a chance for legendaries."
              originalPrice={5000}
              discountPrice={3500}
              currency="coins"
              discount={30}
              onPurchase={() => handlePurchase("Elements Mega Pack", 3500)}
            />
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

const PackCard = ({
  title,
  description,
  price,
  currency,
  icon,
  bgColor,
  onPurchase,
}: {
  title: string;
  description: string;
  price: number;
  currency: "coins" | "gems";
  icon: React.ReactNode;
  bgColor: string;
  onPurchase: () => void;
}) => (
  <Card className="overflow-hidden border-0 shadow-lg bg-white/5 hover:bg-white/10 transition-colors">
    <div className={`${bgColor} h-24 flex items-center justify-center`}>
      <div className="bg-white/20 p-4 rounded-full">{icon}</div>
    </div>
    <CardHeader className="pb-2">
      <h3 className="text-xl font-bold">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400 text-sm">{description}</p>
    </CardContent>
    <CardFooter>
      <Button 
        onClick={onPurchase} 
        className="w-full bg-white/10 hover:bg-white/20"
      >
        <span className="mr-2">Buy for</span>
        <span className="font-bold">{price}</span>
        <span className="ml-1">{currency === "coins" ? "Coins" : "Gems"}</span>
      </Button>
    </CardFooter>
  </Card>
);

const SpecialOfferCard = ({
  title,
  description,
  originalPrice,
  discountPrice,
  currency,
  discount,
  onPurchase,
}: {
  title: string;
  description: string;
  originalPrice: number;
  discountPrice: number;
  currency: "coins" | "gems";
  discount: number;
  onPurchase: () => void;
}) => (
  <Card className="overflow-hidden border-0 shadow-lg bg-white/5 hover:bg-white/10 transition-colors relative">
    <div className="absolute top-4 right-4 bg-game-accent text-white px-3 py-1 rounded-full text-xs font-bold">
      -{discount}%
    </div>
    <CardHeader className="pb-2">
      <h3 className="text-xl font-bold">{title}</h3>
    </CardHeader>
    <CardContent>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex items-center">
        <span className="text-gray-400 line-through mr-2">{originalPrice} {currency === "coins" ? "Coins" : "Gems"}</span>
        <span className="text-xl font-bold text-game-accent">{discountPrice} {currency === "coins" ? "Coins" : "Gems"}</span>
      </div>
    </CardContent>
    <CardFooter>
      <Button 
        onClick={onPurchase} 
        className="w-full bg-game-accent hover:bg-game-accent/90"
      >
        Purchase Now
      </Button>
    </CardFooter>
  </Card>
);

export default ShopPage;
