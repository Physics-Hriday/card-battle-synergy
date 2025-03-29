
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sword, Library, Trophy, ShoppingBag, Settings, LogOut } from "lucide-react";
import { mockPlayer } from "@/data/mockData";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-black bg-opacity-50 sticky top-0 z-50 py-4 border-b border-white/10">
      <div className="game-container flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <span className="text-game-primary">Synergy</span>
            <span className="text-game-accent ml-1">Clash</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/battle" icon={<Sword size={18} />} label="Battle" />
            <NavLink to="/collection" icon={<Library size={18} />} label="Collection" />
            <NavLink to="/leaderboard" icon={<Trophy size={18} />} label="Leaderboard" />
            <NavLink to="/shop" icon={<ShoppingBag size={18} />} label="Shop" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center">
            <div className="flex items-center mx-2">
              <div className="w-6 h-6 rounded-full bg-game-accent flex items-center justify-center mr-1">
                <span className="text-xs font-bold">₵</span>
              </div>
              <span>{mockPlayer.coins}</span>
            </div>
            <div className="flex items-center mx-2">
              <div className="w-6 h-6 rounded-full bg-game-primary flex items-center justify-center mr-1">
                <span className="text-xs font-bold">G</span>
              </div>
              <span>{mockPlayer.gems}</span>
            </div>
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarImage src="/avatars/avatar1.png" alt="Avatar" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-game-primary text-white text-xs rounded-full flex items-center justify-center">
                  {mockPlayer.level}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-game-background border border-white/20">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="font-medium text-white">{mockPlayer.username}</p>
                  <p className="text-xs text-gray-400">Level {mockPlayer.level} • {mockPlayer.stats.rankName}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => (
  <Link
    to={to}
    className="flex items-center text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
  >
    <span className="mr-2">{icon}</span>
    <span>{label}</span>
  </Link>
);

export default Navbar;
