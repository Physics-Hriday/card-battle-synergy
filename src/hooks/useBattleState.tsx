
import { useState } from "react";
import { Card as CardType } from "@/types/game";
import { mockCards } from "@/data/mockData";
import { calculateDamage, canPlayCard } from "@/utils/battleMechanics";
import { toast } from "sonner";

export function useBattleState() {
  const [playerHealth, setPlayerHealth] = useState(30);
  const [playerEnergy, setPlayerEnergy] = useState(5);
  const [opponentHealth, setOpponentHealth] = useState(30);
  const [opponentEnergy, setOpponentEnergy] = useState(5);
  const [playerHand, setPlayerHand] = useState<CardType[]>(mockCards.slice(0, 4));
  const [opponentHand, setOpponentHand] = useState<CardType[]>(mockCards.slice(10, 14));
  const [playerField, setPlayerField] = useState<CardType[]>([mockCards[4]]);
  const [opponentField, setOpponentField] = useState<CardType[]>([mockCards[14]]);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const [targetCard, setTargetCard] = useState<CardType | null>(null);
  const [turn, setTurn] = useState(1);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [gameLog, setGameLog] = useState<string[]>(["Game started. Your turn!"]);

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
      // Add rewards logic here
    } else {
      toast.error("Defeat! Better luck next time!");
    }
    
    // Reset game state or redirect to results page
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
    if (opponentHand.length > 0 && opponentEnergy >= opponentHand[0].cost) {
      const cardToPlay = opponentHand[0];
      setOpponentHand(opponentHand.filter((_, index) => index !== 0));
      setOpponentField([...opponentField, cardToPlay]);
      setOpponentEnergy(opponentEnergy - cardToPlay.cost);
      addToGameLog(`Opponent played ${cardToPlay.name}`);
    }
    
    if (opponentField.length > 0) {
      const attackingCard = opponentField[0];
      const damage = attackingCard.attack;
      
      if (playerField.length > 0) {
        const targetCard = playerField[0];
        addToGameLog(`Opponent's ${attackingCard.name} attacks your ${targetCard.name} for ${damage} damage!`);
        
        setPlayerField(playerField.map(card => {
          if (card.id === targetCard.id) {
            const updatedHealth = card.defense - damage;
            if (updatedHealth <= 0) {
              addToGameLog(`Your ${targetCard.name} was destroyed!`);
              return { ...card, defense: 0 };
            }
            return { ...card, defense: updatedHealth };
          }
          return card;
        }).filter(card => card.defense > 0));
      } else {
        setPlayerHealth(Math.max(0, playerHealth - damage));
        addToGameLog(`Opponent dealt ${damage} damage to you!`);
      }
    }
    
    // Next turn setup
    setTimeout(() => {
      setTurn(turn + 1);
      setPlayerEnergy(Math.min(10, playerEnergy + 2));
      setOpponentEnergy(Math.min(10, opponentEnergy + 2));
      setIsPlayerTurn(true);
      addToGameLog(`Turn ${turn + 1}. Your turn!`);
      
      if (mockCards.length > 0) {
        const newCard = mockCards[Math.floor(Math.random() * mockCards.length)];
        setPlayerHand([...playerHand, newCard]);
        addToGameLog(`You drew ${newCard.name}`);
      }
    }, 1000);
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
    addToGameLog
  };
}
