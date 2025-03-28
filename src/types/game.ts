
// Card element types
export type ElementType = 'fire' | 'water' | 'earth' | 'air' | 'light' | 'dark';

// Card rarity levels
export type CardRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// Card interface
export interface Card {
  id: string;
  name: string;
  description: string;
  image: string;
  element: ElementType;
  rarity: CardRarity;
  attack: number;
  defense: number;
  cost: number;
  abilities: Ability[];
}

// Ability interface
export interface Ability {
  id: string;
  name: string;
  description: string;
  cost: number;
  effect: string;
}

// Deck interface
export interface Deck {
  id: string;
  name: string;
  cards: Card[];
  coverCard?: Card;
}

// Player interface
export interface Player {
  id: string;
  username: string;
  avatar: string;
  level: number;
  experience: number;
  coins: number;
  gems: number;
  decks: Deck[];
  collection: Card[];
  stats: PlayerStats;
}

// Player stats
export interface PlayerStats {
  wins: number;
  losses: number;
  winRate: number;
  totalGames: number;
  rank: number;
  rankName: string;
}

// Game state for battle
export interface GameState {
  player1: BattlePlayer;
  player2: BattlePlayer;
  turn: number;
  currentPlayer: 'player1' | 'player2';
  winner: 'player1' | 'player2' | null;
  log: GameLogEntry[];
}

// Player state during battle
export interface BattlePlayer {
  id: string;
  username: string;
  avatar: string;
  health: number;
  maxHealth: number;
  energy: number;
  maxEnergy: number;
  deck: Card[];
  hand: Card[];
  field: Card[];
  graveyard: Card[];
}

// Game log entry
export interface GameLogEntry {
  turn: number;
  player: string;
  action: string;
  card?: Card;
  target?: Card;
}
