
import { Card, Deck, Player, ElementType, CardRarity } from "../types/game";

// Helper function to create cards
const createCard = (
  id: string,
  name: string,
  element: ElementType,
  rarity: CardRarity,
  attack: number,
  defense: number,
  cost: number,
  description: string
): Card => ({
  id,
  name,
  element,
  rarity,
  attack,
  defense,
  cost,
  image: `/cards/${id}.png`,
  description,
  abilities: [
    {
      id: `ability-${id}-1`,
      name: `${element} Strike`,
      description: `Deal ${attack} damage to target enemy.`,
      cost: 1,
      effect: "damage",
    },
    {
      id: `ability-${id}-2`,
      name: `${element} Shield`,
      description: `Gain ${defense} defense until your next turn.`,
      cost: 1,
      effect: "shield",
    },
  ],
});

// Generate mock cards
export const mockCards: Card[] = [
  createCard("c1", "Ember Dragon", "fire", "legendary", 8, 6, 7, "A powerful dragon that can breathe devastating fire."),
  createCard("c2", "Frost Titan", "water", "epic", 6, 8, 6, "A towering giant made of pure ice."),
  createCard("c3", "Stone Guardian", "earth", "rare", 5, 9, 5, "A living statue that protects ancient temples."),
  createCard("c4", "Wind Sprite", "air", "uncommon", 3, 3, 2, "A playful elemental that commands the winds."),
  createCard("c5", "Radiant Angel", "light", "epic", 7, 7, 6, "A divine being that brings hope and healing."),
  createCard("c6", "Shadow Assassin", "dark", "rare", 9, 4, 6, "A stealthy killer that strikes from the shadows."),
  createCard("c7", "Lava Golem", "fire", "rare", 6, 7, 5, "A creature formed from molten magma."),
  createCard("c8", "Tidal Serpent", "water", "rare", 7, 6, 5, "A massive sea monster that creates devastating tsunamis."),
  createCard("c9", "Forest Guardian", "earth", "uncommon", 4, 5, 3, "A spirit that protects the ancient forests."),
  createCard("c10", "Thunder Hawk", "air", "rare", 6, 4, 4, "A bird that can summon storms with a flap of its wings."),
  createCard("c11", "Solar Phoenix", "light", "legendary", 9, 7, 8, "A mythical bird that is reborn in flames."),
  createCard("c12", "Void Walker", "dark", "epic", 8, 5, 6, "A creature from beyond reality that consumes light."),
  createCard("c13", "Flame Imp", "fire", "common", 2, 1, 1, "A mischievous little fire spirit."),
  createCard("c14", "Water Nymph", "water", "common", 1, 3, 1, "A gentle spirit of streams and rivers."),
  createCard("c15", "Rock Dwarf", "earth", "common", 3, 3, 2, "A stout miner with skin tough as stone."),
  createCard("c16", "Cloud Fairy", "air", "common", 1, 1, 1, "A tiny being that lives among the clouds."),
  createCard("c17", "Light Wisp", "light", "common", 2, 2, 1, "A floating orb of pure light energy."),
  createCard("c18", "Dark Goblin", "dark", "common", 3, 1, 1, "A sneaky creature that lurks in caves."),
  createCard("c19", "Inferno Djinn", "fire", "epic", 7, 5, 6, "A powerful spirit born of flames and chaos."),
  createCard("c20", "Abyssal Kraken", "water", "legendary", 10, 8, 9, "A colossal beast from the deepest trenches."),
];

// Generate mock decks
export const mockDecks: Deck[] = [
  {
    id: "d1",
    name: "Blazing Glory",
    coverCard: mockCards[0],
    cards: [mockCards[0], mockCards[6], mockCards[12], mockCards[18], mockCards[4]],
  },
  {
    id: "d2",
    name: "Ocean's Might",
    coverCard: mockCards[1],
    cards: [mockCards[1], mockCards[7], mockCards[13], mockCards[19], mockCards[5]],
  },
  {
    id: "d3",
    name: "Nature's Wrath",
    coverCard: mockCards[2],
    cards: [mockCards[2], mockCards[8], mockCards[14], mockCards[0], mockCards[10]],
  },
];

// Generate mock player
export const mockPlayer: Player = {
  id: "p1",
  username: "CardMaster",
  avatar: "/avatars/avatar1.png",
  level: 15,
  experience: 1500,
  coins: 750,
  gems: 50,
  decks: mockDecks,
  collection: mockCards,
  stats: {
    wins: 42,
    losses: 18,
    winRate: 70,
    totalGames: 60,
    rank: 8,
    rankName: "Gold",
  },
};
