
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sword, Library, Trophy, ShoppingBag, Settings, LogOut, Info, Menu, X, Bell, BookOpen } from "lucide-react";
import { mockPlayer } from "@/data/mockData";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "backdrop-blur-md sticky top-0 z-50 py-4 border-b border-white/10 transition-all duration-300",
        isScrolled ? "bg-black bg-opacity-70" : "bg-black bg-opacity-40"
      )}
    >
      <div className="game-container flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-2xl font-bold text-white flex items-center">
            <span className="text-game-primary">Poki</span>
            <span className="text-game-accent ml-1">War</span>
          </Link>
          
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white">Play</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-black/90 border border-white/10">
                      <NavItem to="/battle" icon={<Sword className="mr-2 h-4 w-4" />} title="Battle Arena" description="Fight against other players in real-time" />
                      <NavItem to="/collection" icon={<Library className="mr-2 h-4 w-4" />} title="Card Collection" description="Browse and organize your cards" />
                      <NavItem to="/shop" icon={<ShoppingBag className="mr-2 h-4 w-4" />} title="Card Shop" description="Buy new card packs and items" />
                      <NavItem to="/leaderboard" icon={<Trophy className="mr-2 h-4 w-4" />} title="Leaderboard" description="See top ranking players" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-white/10 text-white">Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2 bg-black/90 border border-white/10">
                      <NavItem to="/guides" icon={<BookOpen className="mr-2 h-4 w-4" />} title="Game Guides" description="Learn strategies and tips" />
                      <NavItem to="/updates" icon={<Bell className="mr-2 h-4 w-4" />} title="Game Updates" description="Latest patches and changes" />
                      <NavItem to="/faq" icon={<Info className="mr-2 h-4 w-4" />} title="FAQ" description="Frequently asked questions" />
                      <NavItem to="/about" icon={<Info className="mr-2 h-4 w-4" />} title="About Game" description="Learn about Poki War" />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <NavLink to="/battle" icon={<Sword size={18} />} label="Battle" />
            <NavLink to="/collection" icon={<Library size={18} />} label="Collection" />
            <NavLink to="/leaderboard" icon={<Trophy size={18} />} label="Leaderboard" />
            <NavLink to="/shop" icon={<ShoppingBag size={18} />} label="Shop" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center">
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
                  <AvatarFallback>PW</AvatarFallback>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-game-primary text-white text-xs rounded-full flex items-center justify-center">
                  {mockPlayer.level}
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-black/90 border border-white/20">
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
          
          {/* Mobile menu button */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 border-b border-white/10 py-4 z-50 animate-fade-in">
          <div className="game-container">
            <div className="grid grid-cols-2 gap-2">
              <MobileNavLink to="/battle" icon={<Sword size={18} />} label="Battle Arena" />
              <MobileNavLink to="/collection" icon={<Library size={18} />} label="Card Collection" />
              <MobileNavLink to="/shop" icon={<ShoppingBag size={18} />} label="Card Shop" />
              <MobileNavLink to="/leaderboard" icon={<Trophy size={18} />} label="Leaderboard" />
              <MobileNavLink to="/guides" icon={<BookOpen size={18} />} label="Game Guides" />
              <MobileNavLink to="/updates" icon={<Bell size={18} />} label="Game Updates" />
              <MobileNavLink to="/about" icon={<Info size={18} />} label="About Game" />
              <MobileNavLink to="/faq" icon={<Info size={18} />} label="FAQ" />
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <div className="w-5 h-5 rounded-full bg-game-accent flex items-center justify-center mr-1">
                    <span className="text-xs font-bold">₵</span>
                  </div>
                  <span className="text-sm">{mockPlayer.coins}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-game-primary flex items-center justify-center mr-1">
                    <span className="text-xs font-bold">G</span>
                  </div>
                  <span className="text-sm">{mockPlayer.gems}</span>
                </div>
              </div>
              
              <Link to="/settings">
                <Button variant="outline" size="sm" className="border-white/20">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center text-white/70 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10",
        isActive && "bg-white/10 text-white"
      )}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

const MobileNavLink = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center text-white/70 hover:text-white transition-colors p-3 rounded-lg hover:bg-white/10",
        isActive && "bg-white/10 text-white"
      )}
    >
      <span className="mr-2">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

const NavItem = ({ to, icon, title, description }: { to: string; icon: React.ReactNode; title: string; description: string }) => (
  <li>
    <Link
      to={to}
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white"
    >
      <div className="flex items-center">
        {icon}
        <div className="text-sm font-medium leading-none">{title}</div>
      </div>
      <p className="line-clamp-2 text-sm leading-snug text-gray-400">
        {description}
      </p>
    </Link>
  </li>
);

export default Navbar;
