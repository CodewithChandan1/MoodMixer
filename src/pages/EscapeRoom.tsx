import React, { useState } from 'react';
import { Timer } from '../components/escape-room/Timer';
import { Puzzle } from '../components/escape-room/Puzzle';
import { Inventory } from '../components/escape-room/Inventory';
import { useEscapeRoom } from '../hooks/useEscapeRoom';

function EscapeRoom() {
  const { 
    gameState,
    inventory,
    currentPuzzle,
    timeLeft,
    handlePuzzleSolve,
    handleItemUse
  } = useEscapeRoom();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        Virtual Escape Room
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Timer timeLeft={timeLeft} />
          <Puzzle
            puzzle={currentPuzzle}
            onSolve={handlePuzzleSolve}
          />
        </div>
        <Inventory
          items={inventory}
          onItemUse={handleItemUse}
        />
      </div>
    </div>
  );
}

export default EscapeRoom;