
import { useState, useEffect } from "react";
import { Card as CardType } from "@/types/game";
import { mockCards } from "@/data/mockData";
import { calculateDamage, canPlayCard } from "@/utils/battleMechanics";
import { toast } from "sonner";
import { useGameStore } from "@/utils/gameState";
import { loadFromLocalStorage, saveToLocalStorage } from "@/utils/localStorage";

// Local storage keys for battle state
const STORAGE_KEYS = {
  BATTLE_STATE: 'pokigame_battle_state'
};

interface BattleState {
  playerHealth: number;
  playerEnergy: number;
  opponentHealth: number;
  opponentEnergy: number;
  playerHand: CardType[];
  opponentHand: CardType[];
  playerField: CardType[];
  opponentField: CardType[];
  selectedCard: CardType | null;
  targetCard: CardType | null;
  turn: number;
  isPlayerTurn: boolean;
  gameLog: string[];
}

export function useBattleState() {
  // Load battle state from localStorage or use default values
  const initialState = loadFromLocalStorage<BattleState>(STORAGE_KEYS.BATTLE_STATE, {
    playerHealth: 30,
    playerEnergy: 5,
    opponentHealth: 30,
    opponentEnergy: 5,
    playerHand: mockCards.slice(0, 4),
    opponentHand: mockCards.slice(10, 14),
    playerField: [mockCards[4]],
    opponentField: [mockCards[14]],
    selectedCard: null,
    targetCard: null,
    turn: 1,
    isPlayerTurn: true,
    gameLog: ["Game started. Your turn!"]
  });

  const [playerHealth, setPlayerHealth] = useState(initialState.playerHealth);
  const [playerEnergy, setPlayerEnergy] = useState(initialState.playerEnergy);
  const [opponentHealth, setOpponentHealth] = useState(initialState.opponentHealth);
  const [opponentEnergy, setOpponentEnergy] = useState(initialState.opponentEnergy);
  const [playerHand, setPlayerHand] = useState<CardType[]>(initialState.playerHand);
  const [opponentHand, setOpponentHand] = useState<CardType[]>(initialState.opponentHand);
  const [playerField, setPlayerField] = useState<CardType[]>(initialState.playerField);
  const [opponentField, setOpponentField] = useState<CardType[]>(initialState.opponentField);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(initialState.selectedCard);
  const [targetCard, setTargetCard] = useState<CardType | null>(initialState.targetCard);
  const [turn, setTurn] = useState(initialState.turn);
  const [isPlayerTurn, setIsPlayerTurn] = useState(initialState.isPlayerTurn);
  const [gameLog, setGameLog] = useState<string[]>(initialState.gameLog);
  
  const { addCoins, addGems } = useGameStore();

  // Save battle state to localStorage whenever it changes
  useEffect(() => {
    const currentState: BattleState = {
      playerHealth,
      playerEnergy,
      opponentHealth,
      opponentEnergy,
      playerHand,
      opponentHand,
      playerField,
      opponentField,
      selectedCard,
      targetCard,
      turn,
      isPlayerTurn,
      gameLog
    };
    
    saveToLocalStorage(STORAGE_KEYS.BATTLE_STATE, currentState);
  }, [
    playerHealth, playerEnergy, opponentHealth, opponentEnergy,
    playerHand, opponentHand, playerField, opponentField,
    selectedCard, targetCard, turn, isPlayerTurn, gameLog
  ]);

  const addToGameLog = (message: string) => {
    setGameLog([message, ...gameLog]);
  };

  const handleCardSelect = (card: CardType) => {
    if (!isPlayerTurn) {
      toast.error("It's not your turn!");
      return;
    }
    
    if (selectedCard?.id === card.id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(card);
      setTargetCard(null);
    }
  };
  
  const handleTargetSelect = (card: CardType) => {
    if (!isPlayerTurn || !selectedCard) {
      return;
    }
    
    if (targetCard?.id === card.id) {
      setTargetCard(null);
    } else {
      setTargetCard(card);
    }
  };

  const handleGameEnd = (winner: 'player' | 'opponent') => {
    if (winner === 'player') {
      toast.success("Victory! You've won the battle!");
      // Add rewards to player
      addCoins(100);
      addGems(5);
      toast.success("Rewards: +100 coins, +5 gems");
    } else {
      toast.error("Defeat! Better luck next time!");
      // Add small consolation reward
      addCoins(25);
      toast.info("Consolation: +25 coins");
    }
    
    // Reset battle state for next game
    setTimeout(() => {
      const newBattleState: BattleState = {
        playerHealth: 30,
        playerEnergy: 5,
        opponentHealth: 30,
        opponentEnergy: 5,
        playerHand: mockCards.slice(0, 4),
        opponentHand: mockCards.slice(10, 14),
        playerField: [mockCards[4]],
        opponentField: [mockCards[14]],
        selectedCard: null,
        targetCard: null,
        turn: 1,
        isPlayerTurn: true,
        gameLog: ["New game started. Your turn!"]
      };
      
      setPlayerHealth(newBattleState.playerHealth);
      setPlayerEnergy(newBattleState.playerEnergy);
      setOpponentHealth(newBattleState.opponentHealth);
      setOpponentEnergy(newBattleState.opponentEnergy);
      setPlayerHand(newBattleState.playerHand);
      setOpponentHand(newBattleState.opponentHand);
      setPlayerField(newBattleState.playerField);
      setOpponentField(newBattleState.opponentField);
      setSelectedCard(newBattleState.selectedCard);
      setTargetCard(newBattleState.targetCard);
      setTurn(newBattleState.turn);
      setIsPlayerTurn(newBattleState.isPlayerTurn);
      setGameLog(newBattleState.gameLog);
      
      saveToLocalStorage(STORAGE_KEYS.BATTLE_STATE, newBattleState);
    }, 3000);
  };

  const handleAttack = () => {
    if (!selectedCard || !targetCard || !isPlayerTurn) return;
    
    const damage = calculateDamage(selectedCard, targetCard);
    addToGameLog(`${selectedCard.name} attacks ${targetCard.name} for ${damage} damage!`);
    
    if (opponentField.some(card => card.id === targetCard.id)) {
      setOpponentField(opponentField.map(card => {
        if (card.id === targetCard.id) {
          const updatedHealth = card.defense - damage;
          if (updatedHealth <= 0) {
            addToGameLog(`${targetCard.name} was destroyed!`);
            return { ...card, defense: 0 };
          }
          return { ...card, defense: updatedHealth };
        }
        return card;
      }).filter(card => card.defense > 0));
    } else {
      setOpponentHealth(Math.max(0, opponentHealth - damage));
      addToGameLog(`You dealt ${damage} damage to opponent!`);
      
      if (opponentHealth - damage <= 0) {
        handleGameEnd('player');
      }
    }
    
    setSelectedCard(null);
    setTargetCard(null);
  };

  const handlePlayCard = () => {
    if (!selectedCard || !isPlayerTurn) return;
    
    if (!canPlayCard(selectedCard, playerEnergy)) {
      toast.error("Not enough energy to play this card!");
      return;
    }

    setPlayerHand(playerHand.filter(card => card.id !== selectedCard.id));
    setPlayerField([...playerField, selectedCard]);
    setPlayerEnergy(playerEnergy - selectedCard.cost);
    
    addToGameLog(`You played ${selectedCard.name}`);
    setSelectedCard(null);
    
    toast.success(`Successfully played ${selectedCard.name}!`);
  };

  const handleEndTurn = () => {
    if (!isPlayerTurn) return;
    
    setIsPlayerTurn(false);
    addToGameLog("You ended your turn. Opponent's turn now.");
    
    toast.info("Turn ended. Opponent is thinking...");
    
    // Opponent's turn logic
    setTimeout(() => {
      // Try to play a card if possible
      if (opponentHand.length > 0 && opponentEnergy >= opponentHand[0].cost) {
        const cardToPlay = opponentHand[0];
        setOpponentHand(opponentHand.filter((_, index) => index !== 0));
        setOpponentField([...opponentField, cardToPlay]);
        setOpponentEnergy(opponentEnergy - cardToPlay.cost);
        addToGameLog(`Opponent played ${cardToPlay.name}`);
      }
      
      // Attack if possible
      if (opponentField.length > 0) {
        const attackingCard = opponentField[0];
        const damage = attackingCard.attack;
        
        if (playerField.length > 0) {
          const target = playerField[0];
          addToGameLog(`Opponent's ${attackingCard.name} attacks your ${target.name} for ${damage} damage!`);
          
          setPlayerField(playerField.map(card => {
            if (card.id === target.id) {
              const updatedHealth = card.defense - damage;
              if (updatedHealth <= 0) {
                addToGameLog(`Your ${target.name} was destroyed!`);
                return { ...card, defense: 0 };
              }
              return { ...card, defense: updatedHealth };
            }
            return card;
          }).filter(card => card.defense > 0));
        } else {
          const newHealth = Math.max(0, playerHealth - damage);
          setPlayerHealth(newHealth);
          addToGameLog(`Opponent dealt ${damage} damage to you!`);
          
          if (newHealth <= 0) {
            handleGameEnd('opponent');
            return;
          }
        }
      }
      
      // Next turn setup
      setTimeout(() => {
        setTurn(turn + 1);
        setPlayerEnergy(Math.min(10, playerEnergy + 2));
        setOpponentEnergy(Math.min(10, opponentEnergy + 2));
        setIsPlayerTurn(true);
        addToGameLog(`Turn ${turn + 1}. Your turn!`);
        
        // Player draws a card
        if (mockCards.length > 0) {
          const newCard = mockCards[Math.floor(Math.random() * mockCards.length)];
          setPlayerHand([...playerHand, newCard]);
          addToGameLog(`You drew ${newCard.name}`);
        }
      }, 500);
    }, 1500);
  };

  const resetBattle = () => {
    // Reset battle state to initial values
    const newBattleState: BattleState = {
      playerHealth: 30,
      playerEnergy: 5,
      opponentHealth: 30,
      opponentEnergy: 5,
      playerHand: mockCards.slice(0, 4),
      opponentHand: mockCards.slice(10, 14),
      playerField: [mockCards[4]],
      opponentField: [mockCards[14]],
      selectedCard: null,
      targetCard: null,
      turn: 1,
      isPlayerTurn: true,
      gameLog: ["Game started. Your turn!"]
    };
    
    setPlayerHealth(newBattleState.playerHealth);
    setPlayerEnergy(newBattleState.playerEnergy);
    setOpponentHealth(newBattleState.opponentHealth);
    setOpponentEnergy(newBattleState.opponentEnergy);
    setPlayerHand(newBattleState.playerHand);
    setOpponentHand(newBattleState.opponentHand);
    setPlayerField(newBattleState.playerField);
    setOpponentField(newBattleState.opponentField);
    setSelectedCard(newBattleState.selectedCard);
    setTargetCard(newBattleState.targetCard);
    setTurn(newBattleState.turn);
    setIsPlayerTurn(newBattleState.isPlayerTurn);
    setGameLog(newBattleState.gameLog);
    
    saveToLocalStorage(STORAGE_KEYS.BATTLE_STATE, newBattleState);
    toast.success("Battle reset! New game started.");
  };

  return {
    playerHealth,
    playerEnergy,
    opponentHealth,
    opponentEnergy,
    playerHand,
    opponentHand,
    playerField,
    opponentField,
    selectedCard,
    targetCard,
    turn,
    isPlayerTurn,
    gameLog,
    handleCardSelect,
    handleTargetSelect,
    handleAttack,
    handlePlayCard,
    handleEndTurn,
    addToGameLog,
    resetBattle
  };
}
