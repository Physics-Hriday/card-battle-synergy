
import React, { useState } from "react";
import GameLayout from "@/components/layout/GameLayout";
import GameCard from "@/components/cards/GameCard";
import { Button } from "@/components/ui/button";
import { mockCards, mockPlayer } from "@/data/mockData";
import { Sword, Shield, Zap, User, Clock } from "lucide-react";
import { Card as CardType } from "@/types/game";
import { Progress } from "@/components/ui/progress";

const BattlePage = () => {
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

  const handleCardSelect = (card: CardType) => {
    if (!isPlayerTurn) return;
    
    if (selectedCard?.id === card.id) {
      setSelectedCard(null);
    } else {
      setSelectedCard(card);
      setTargetCard(null);
    }
  };

  const handleTargetSelect = (card: CardType) => {
    if (!selectedCard || !isPlayerTurn) return;
    setTargetCard(card);
  };

  const handlePlayCard = () => {
    if (!selectedCard || !isPlayerTurn) return;
    
    if (playerEnergy < selectedCard.cost) {
      addToGameLog("Not enough energy to play this card!");
      return;
    }

    // Remove card from hand and add to field
    setPlayerHand(playerHand.filter(card => card.id !== selectedCard.id));
    setPlayerField([...playerField, selectedCard]);
    setPlayerEnergy(playerEnergy - selectedCard.cost);
    
    addToGameLog(`You played ${selectedCard.name}`);
    setSelectedCard(null);
  };

  const handleAttack = () => {
    if (!selectedCard || !targetCard || !isPlayerTurn) return;
    
    // Simulate attack
    const damage = selectedCard.attack;
    addToGameLog(`${selectedCard.name} attacks ${targetCard.name} for ${damage} damage!`);
    
    // If attacking opponent field card
    if (opponentField.some(card => card.id === targetCard.id)) {
      // Update opponent field (would need proper logic for defense calculation)
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
      // Direct attack on opponent
      setOpponentHealth(Math.max(0, opponentHealth - damage));
      addToGameLog(`You dealt ${damage} damage to opponent!`);
    }
    
    setSelectedCard(null);
    setTargetCard(null);
  };

  const handleEndTurn = () => {
    if (!isPlayerTurn) return;
    
    setIsPlayerTurn(false);
    addToGameLog("You ended your turn. Opponent's turn now.");
    
    // Simulate opponent turn
    setTimeout(() => {
      // Simple opponent AI - play a random card if possible
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
          // Attack player's card
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
          // Direct attack on player
          setPlayerHealth(Math.max(0, playerHealth - damage));
          addToGameLog(`Opponent dealt ${damage} damage to you!`);
        }
      }
      
      // End opponent turn
      setTimeout(() => {
        setTurn(turn + 1);
        setPlayerEnergy(Math.min(10, playerEnergy + 2));
        setOpponentEnergy(Math.min(10, opponentEnergy + 2));
        setIsPlayerTurn(true);
        addToGameLog(`Turn ${turn + 1}. Your turn!`);
        
        // Draw a card
        if (mockCards.length > 0) {
          const newCard = mockCards[Math.floor(Math.random() * mockCards.length)];
          setPlayerHand([...playerHand, newCard]);
          addToGameLog(`You drew ${newCard.name}`);
        }
      }, 1000);
    }, 2000);
  };

  const addToGameLog = (message: string) => {
    setGameLog([message, ...gameLog]);
  };

  return (
    <GameLayout>
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">Battle Arena</h1>
        <div className="flex items-center text-sm text-gray-300">
          <Clock className="mr-1 w-4 h-4" />
          <span>Turn {turn}</span>
          <span className="mx-2">•</span>
          <span className={isPlayerTurn ? "text-game-primary" : "text-game-accent"}>
            {isPlayerTurn ? "Your Turn" : "Opponent's Turn"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="glass-panel mb-6">
            {/* Opponent info */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src="/avatars/opponent.png" 
                    alt="Opponent" 
                    className="w-12 h-12 rounded-full border-2 border-game-accent"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-game-accent text-white text-xs rounded-full flex items-center justify-center">
                    20
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-bold">Challenger</h3>
                  <div className="text-xs text-gray-400">
                    <span className="text-game-accent">Diamond</span> Rank
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Health</div>
                  <div className="flex items-center">
                    <Progress value={(opponentHealth / 30) * 100} className="w-32 h-2 bg-white/20" indicatorClassName="bg-game-accent" />
                    <span className="ml-2 text-sm font-bold">{opponentHealth}/30</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-1">Energy</div>
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < opponentEnergy ? 'bg-game-primary' : 'bg-white/20'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-bold">{opponentEnergy}/10</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Opponent field */}
            <div className="bg-black/20 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-bold mb-3 text-gray-400">Opponent's Field</h3>
              <div className="flex justify-center gap-4">
                {opponentField.length > 0 ? (
                  opponentField.map(card => (
                    <div 
                      key={card.id} 
                      className="cursor-pointer" 
                      onClick={() => handleTargetSelect(card)}
                    >
                      <GameCard 
                        card={card} 
                        size="sm" 
                        className={targetCard?.id === card.id ? "ring-2 ring-game-accent" : ""}
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 py-8">No cards on field</div>
                )}
              </div>
            </div>
            
            {/* Battle zone */}
            <div className="relative py-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-game-fire to-game-water opacity-20 animate-pulse"></div>
              </div>
              <div className="flex justify-center items-center">
                <div className="bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full">
                  <Sword className="w-6 h-6 text-game-accent" />
                </div>
              </div>
            </div>
            
            {/* Player field */}
            <div className="bg-black/20 rounded-lg p-4 mb-4">
              <h3 className="text-sm font-bold mb-3 text-gray-400">Your Field</h3>
              <div className="flex justify-center gap-4">
                {playerField.length > 0 ? (
                  playerField.map(card => (
                    <div 
                      key={card.id} 
                      className="cursor-pointer" 
                      onClick={() => handleCardSelect(card)}
                    >
                      <GameCard 
                        card={card} 
                        size="sm" 
                        className={selectedCard?.id === card.id ? "ring-2 ring-game-primary" : ""}
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-gray-500 py-8">No cards on field</div>
                )}
              </div>
            </div>
            
            {/* Player info */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="relative">
                  <img 
                    src={mockPlayer.avatar} 
                    alt="Player" 
                    className="w-12 h-12 rounded-full border-2 border-game-primary"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-game-primary text-white text-xs rounded-full flex items-center justify-center">
                    {mockPlayer.level}
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="font-bold">{mockPlayer.username}</h3>
                  <div className="text-xs text-gray-400">
                    <span className="text-game-primary">{mockPlayer.stats.rankName}</span> Rank
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Health</div>
                  <div className="flex items-center">
                    <Progress value={(playerHealth / 30) * 100} className="w-32 h-2 bg-white/20" indicatorClassName="bg-game-primary" />
                    <span className="ml-2 text-sm font-bold">{playerHealth}/30</span>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-1">Energy</div>
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div 
                          key={i}
                          className={`w-3 h-3 rounded-full ${i < playerEnergy ? 'bg-game-primary' : 'bg-white/20'}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-bold">{playerEnergy}/10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Hand */}
          <div className="glass-panel">
            <h3 className="text-sm font-bold mb-3 text-gray-400">Your Hand</h3>
            <div className="flex justify-center gap-4 overflow-x-auto pb-2">
              {playerHand.length > 0 ? (
                playerHand.map(card => (
                  <div 
                    key={card.id} 
                    className="cursor-pointer" 
                    onClick={() => handleCardSelect(card)}
                  >
                    <GameCard 
                      card={card} 
                      size="sm" 
                      className={selectedCard?.id === card.id ? "ring-2 ring-game-primary" : ""}
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-500 py-8">No cards in hand</div>
              )}
            </div>
            <div className="mt-4 flex justify-center space-x-4">
              <Button 
                onClick={handlePlayCard} 
                disabled={!selectedCard || !isPlayerTurn || playerEnergy < (selectedCard?.cost || 0)}
                className="bg-game-primary hover:bg-game-primary/90"
              >
                Play Card
              </Button>
              <Button 
                onClick={handleAttack} 
                disabled={!selectedCard || !targetCard || !isPlayerTurn}
                className="bg-game-accent hover:bg-game-accent/90"
              >
                <Sword className="mr-2 w-4 h-4" />
                Attack
              </Button>
              <Button 
                onClick={handleEndTurn} 
                disabled={!isPlayerTurn}
                variant="outline"
                className="border-white/20"
              >
                End Turn
              </Button>
            </div>
          </div>
        </div>
        
        {/* Game log */}
        <div className="glass-panel h-[calc(100vh-16rem)] overflow-auto">
          <h3 className="text-lg font-bold mb-4">Battle Log</h3>
          <div className="space-y-2">
            {gameLog.map((log, index) => (
              <div 
                key={index} 
                className={`p-2 rounded-lg ${index === 0 ? 'bg-white/10' : ''}`}
              >
                <p className="text-sm">{log}</p>
                {index === 0 && (
                  <div className="text-xs text-gray-500 mt-1">
                    Turn {turn} - {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </GameLayout>
  );
};

export default BattlePage;
