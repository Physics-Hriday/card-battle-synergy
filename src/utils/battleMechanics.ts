
import { Card, ElementType } from '@/types/game';
import { mockCards } from '@/data/mockData';

const elementEffectiveness: Record<ElementType, ElementType[]> = {
  fire: ['earth', 'air'],
  water: ['fire', 'light'],
  earth: ['water', 'dark'],
  air: ['earth', 'light'],
  light: ['dark', 'water'],
  dark: ['light', 'air']
};

export const calculateDamage = (attacker: Card, defender: Card): number => {
  let damage = attacker.attack;
  
  // Element effectiveness bonus (25% more damage)
  if (elementEffectiveness[attacker.element]?.includes(defender.element)) {
    damage *= 1.25;
  }
  
  // Element weakness penalty (25% less damage)
  if (elementEffectiveness[defender.element]?.includes(attacker.element)) {
    damage *= 0.75;
  }
  
  // Rarity bonus
  const rarityMultipliers = {
    common: 1,
    uncommon: 1.1,
    rare: 1.2,
    epic: 1.3,
    legendary: 1.5
  };
  
  damage *= rarityMultipliers[attacker.rarity];
  
  return Math.round(damage);
};

export const canPlayCard = (card: Card, currentEnergy: number): boolean => {
  return currentEnergy >= card.cost;
};

export const getCardDrawChance = (rarity: string): number => {
  const chances = {
    common: 60,
    uncommon: 25,
    rare: 10,
    epic: 4,
    legendary: 1
  };
  return chances[rarity as keyof typeof chances] || 0;
};

export const drawRandomCard = (): Card => {
  const random = Math.random() * 100;
  let cumulative = 0;
  
  for (const rarity of ['common', 'uncommon', 'rare', 'epic', 'legendary']) {
    cumulative += getCardDrawChance(rarity);
    if (random <= cumulative) {
      const cardsOfRarity = mockCards.filter(card => card.rarity === rarity);
      return cardsOfRarity[Math.floor(Math.random() * cardsOfRarity.length)];
    }
  }
  
  return mockCards[0]; // Fallback to first card
};
