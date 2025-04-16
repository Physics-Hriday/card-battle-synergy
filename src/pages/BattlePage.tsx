
import GameLayout from "@/components/layout/GameLayout";
import { useBattleState } from "@/hooks/useBattleState";
import PlayerArea from "@/components/battle/PlayerArea";
import BattleField from "@/components/battle/BattleField";
import HandArea from "@/components/battle/HandArea";
import BattleLog from "@/components/battle/BattleLog";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

const BattlePage = () => {
  const {
    playerHealth,
    playerEnergy,
    opponentHealth,
    opponentEnergy,
    playerHand,
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
    resetBattle
  } = useBattleState();

  return (
    <GameLayout>
      <div className="mb-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-shadow">Battle Arena</h1>
            <div className="flex items-center text-sm text-gray-300 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
              <span>Turn {turn}</span>
              <span className="mx-2">•</span>
              <span className={isPlayerTurn ? "text-game-primary font-bold" : "text-game-accent font-bold"}>
                {isPlayerTurn ? "Your Turn" : "Opponent's Turn"}
              </span>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetBattle}
            className="border-white/10 hover:bg-white/5"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Reset Battle
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="glass-panel mb-6">
            <PlayerArea
              health={opponentHealth}
              maxHealth={30}
              energy={opponentEnergy}
              maxEnergy={10}
              isOpponent={true}
            />
            
            <BattleField
              opponentField={opponentField}
              playerField={playerField}
              selectedCard={selectedCard}
              targetCard={targetCard}
              onCardSelect={handleCardSelect}
              onTargetSelect={handleTargetSelect}
              isPlayerTurn={isPlayerTurn}
            />
            
            <PlayerArea
              health={playerHealth}
              maxHealth={30}
              energy={playerEnergy}
              maxEnergy={10}
              isOpponent={false}
            />
          </div>
          
          <HandArea
            playerHand={playerHand}
            selectedCard={selectedCard}
            onCardSelect={handleCardSelect}
            onPlayCard={handlePlayCard}
            onAttack={handleAttack}
            onEndTurn={handleEndTurn}
            isPlayerTurn={isPlayerTurn}
            targetCard={targetCard}
            playerEnergy={playerEnergy}
          />
        </div>
        
        <BattleLog logs={gameLog} turn={turn} />
      </div>
    </GameLayout>
  );
};

export default BattlePage;
