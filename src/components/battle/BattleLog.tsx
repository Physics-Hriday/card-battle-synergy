
import React from "react";

interface BattleLogProps {
  logs: string[];
  turn: number;
}

const BattleLog = ({ logs, turn }: BattleLogProps) => {
  return (
    <div className="glass-panel h-[calc(100vh-16rem)] overflow-auto">
      <h3 className="text-lg font-bold mb-4">Battle Log</h3>
      <div className="space-y-2">
        {logs.map((log, index) => (
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
  );
};

export default BattleLog;
