
import { Card } from '@/types/game';
import { drawRandomCard } from './battleMechanics';
import { toast } from 'sonner';
import { mockCards } from '@/data/mockData';

export interface PackType {
  id: string;
  name: string;
  description: string;
  cost: number;
  currency: 'coins' | 'gems';
  cardCount: number;
  guaranteedRarity?: string;
}

export const packTypes: PackType[] = [
  {
    id: 'starter',
    name: 'Starter Pack',
    description: 'A basic pack with 5 cards. Guaranteed at least one rare!',
    cost: 100,
    currency: 'coins',
    cardCount: 5,
    guaranteedRarity: 'rare'
  },
  {
    id: 'element',
    name: 'Element Pack',
    description: 'Contains 3 cards of the same element. Higher chance for epic cards!',
    cost: 250,
    currency: 'coins',
    cardCount: 3,
    guaranteedRarity: 'epic'
  },
  {
    id: 'legendary',
    name: 'Legendary Bundle',
    description: 'Contains 10 cards with a guaranteed legendary card!',
    cost: 1000,
    currency: 'gems',
    cardCount: 10,
    guaranteedRarity: 'legendary'
  }
];

export const openPack = (packType: PackType): Card[] => {
  const cards: Card[] = [];
  
  // Add guaranteed rarity card if specified
  if (packType.guaranteedRarity) {
    const guaranteedCard = mockCards.filter(card => card.rarity === packType.guaranteedRarity)[0];
    cards.push(guaranteedCard);
  }
  
  // Fill remaining slots with random cards
  while (cards.length < packType.cardCount) {
    cards.push(drawRandomCard());
  }
  
  return cards;
};

export const purchasePack = (packType: PackType, playerCoins: number, playerGems: number): boolean => {
  if (packType.currency === 'coins' && playerCoins < packType.cost) {
    toast.error('Not enough coins!');
    return false;
  }
  
  if (packType.currency === 'gems' && playerGems < packType.cost) {
    toast.error('Not enough gems!');
    return false;
  }
  
  toast.success(`Successfully purchased ${packType.name}!`);
  return true;
};
