
import { create } from 'zustand';
import { mockCards, mockDecks, mockPlayer } from '@/data/mockData';
import { Card, Deck, Player } from '@/types/game';
import { toast } from 'sonner';

interface GameStore {
  player: Player;
  selectedDeck: Deck | null;
  collection: Card[];
  coins: number;
  gems: number;
  decks: Deck[];
  addCard: (card: Card) => void;
  removeCard: (cardId: string) => void;
  updateDeck: (deck: Deck) => void;
  setSelectedDeck: (deck: Deck | null) => void;
  purchaseCardPack: (cost: number, type: string) => boolean;
}

export const useGameStore = create<GameStore>((set) => ({
  player: mockPlayer,
  selectedDeck: mockDecks[0],
  collection: mockCards,
  coins: mockPlayer.coins,
  gems: mockPlayer.gems,
  decks: mockDecks,
  
  addCard: (card) => set((state) => ({
    collection: [...state.collection, card],
  })),
  
  removeCard: (cardId) => set((state) => ({
    collection: state.collection.filter((card) => card.id !== cardId),
  })),
  
  updateDeck: (deck) => set((state) => ({
    decks: state.decks.map((d) => d.id === deck.id ? deck : d),
  })),
  
  setSelectedDeck: (deck) => set({ selectedDeck: deck }),
  
  purchaseCardPack: (cost, type) => {
    let success = false;
    set((state) => {
      if (state.coins >= cost) {
        success = true;
        toast.success(`Successfully purchased ${type}!`);
        return { coins: state.coins - cost };
      }
      toast.error("Not enough coins!");
      return state;
    });
    return success;
  },
}));
