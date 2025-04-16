
import { create } from 'zustand';
import { mockCards, mockDecks, mockPlayer } from '@/data/mockData';
import { Card, Deck, Player } from '@/types/game';
import { toast } from 'sonner';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';

// Keys for local storage
const STORAGE_KEYS = {
  PLAYER: 'pokigame_player',
  COLLECTION: 'pokigame_collection',
  COINS: 'pokigame_coins',
  GEMS: 'pokigame_gems',
  DECKS: 'pokigame_decks',
  SELECTED_DECK: 'pokigame_selected_deck'
};

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
  addCoins: (amount: number) => void;
  addGems: (amount: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  // Load data from local storage or use mock data as default
  player: loadFromLocalStorage<Player>(STORAGE_KEYS.PLAYER, mockPlayer),
  selectedDeck: loadFromLocalStorage<Deck | null>(STORAGE_KEYS.SELECTED_DECK, mockDecks[0]),
  collection: loadFromLocalStorage<Card[]>(STORAGE_KEYS.COLLECTION, mockCards),
  coins: loadFromLocalStorage<number>(STORAGE_KEYS.COINS, mockPlayer.coins),
  gems: loadFromLocalStorage<number>(STORAGE_KEYS.GEMS, mockPlayer.gems),
  decks: loadFromLocalStorage<Deck[]>(STORAGE_KEYS.DECKS, mockDecks),
  
  addCard: (card) => set((state) => {
    const newCollection = [...state.collection, card];
    saveToLocalStorage(STORAGE_KEYS.COLLECTION, newCollection);
    return { collection: newCollection };
  }),
  
  removeCard: (cardId) => set((state) => {
    const newCollection = state.collection.filter((card) => card.id !== cardId);
    saveToLocalStorage(STORAGE_KEYS.COLLECTION, newCollection);
    return { collection: newCollection };
  }),
  
  updateDeck: (deck) => set((state) => {
    const newDecks = state.decks.map((d) => d.id === deck.id ? deck : d);
    saveToLocalStorage(STORAGE_KEYS.DECKS, newDecks);
    return { decks: newDecks };
  }),
  
  setSelectedDeck: (deck) => {
    saveToLocalStorage(STORAGE_KEYS.SELECTED_DECK, deck);
    set({ selectedDeck: deck });
  },
  
  purchaseCardPack: (cost, type) => {
    let success = false;
    set((state) => {
      if (state.coins >= cost) {
        success = true;
        const newCoins = state.coins - cost;
        saveToLocalStorage(STORAGE_KEYS.COINS, newCoins);
        toast.success(`Successfully purchased ${type}!`);
        return { coins: newCoins };
      }
      toast.error("Not enough coins!");
      return state;
    });
    return success;
  },

  addCoins: (amount) => set((state) => {
    const newCoins = state.coins + amount;
    saveToLocalStorage(STORAGE_KEYS.COINS, newCoins);
    return { coins: newCoins };
  }),

  addGems: (amount) => set((state) => {
    const newGems = state.gems + amount;
    saveToLocalStorage(STORAGE_KEYS.GEMS, newGems);
    return { gems: newGems };
  }),
}));
