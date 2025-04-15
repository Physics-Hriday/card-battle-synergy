
import { Card, Deck } from '@/types/game';
import { toast } from 'sonner';

export const MAX_DECK_SIZE = 30;
export const MIN_DECK_SIZE = 20;

export const validateDeck = (deck: Deck): boolean => {
  if (deck.cards.length < MIN_DECK_SIZE) {
    toast.error(`Deck must have at least ${MIN_DECK_SIZE} cards`);
    return false;
  }
  
  if (deck.cards.length > MAX_DECK_SIZE) {
    toast.error(`Deck cannot have more than ${MAX_DECK_SIZE} cards`);
    return false;
  }
  
  // Check for card limits (max 2 copies of non-legendary, 1 copy of legendary)
  const cardCounts = new Map<string, number>();
  for (const card of deck.cards) {
    const count = (cardCounts.get(card.id) || 0) + 1;
    if (card.rarity === 'legendary' && count > 1) {
      toast.error(`Cannot have more than 1 copy of legendary card: ${card.name}`);
      return false;
    }
    if (count > 2) {
      toast.error(`Cannot have more than 2 copies of: ${card.name}`);
      return false;
    }
    cardCounts.set(card.id, count);
  }
  
  return true;
};

export const calculateDeckStrength = (deck: Deck): number => {
  if (!deck.cards.length) return 0;
  
  const rarityMultipliers = {
    common: 1,
    uncommon: 2,
    rare: 3,
    epic: 4,
    legendary: 5
  };
  
  return deck.cards.reduce((total, card) => {
    const rarityBonus = rarityMultipliers[card.rarity];
    return total + (card.attack + card.defense) * rarityBonus;
  }, 0) / deck.cards.length;
};

export const canAddCardToDeck = (deck: Deck, card: Card): boolean => {
  if (deck.cards.length >= MAX_DECK_SIZE) {
    toast.error(`Deck is already at maximum size (${MAX_DECK_SIZE})`);
    return false;
  }
  
  const cardCount = deck.cards.filter(c => c.id === card.id).length;
  if (card.rarity === 'legendary' && cardCount >= 1) {
    toast.error('Cannot add more than 1 copy of a legendary card');
    return false;
  }
  if (cardCount >= 2) {
    toast.error('Cannot add more than 2 copies of a card');
    return false;
  }
  
  return true;
};
