import { useState, useEffect } from 'react';
import { GameState, PuzzleType, InventoryItem } from '../types/escape-room';
import { puzzles, items } from '../data/escape-room';

export const useEscapeRoom = () => {
  const [gameState, setGameState] = useState<GameState>('not_started');
  const [currentPuzzleIndex, setCurrentPuzzleIndex] = useState(0);
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    if (gameState === 'in_progress') {
      const timer = setInterval(() => {
        setTimeLeft((time) => {
          if (time <= 0) {
            setGameState('failed');
            return 0;
          }
          return time - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [gameState]);

  const handlePuzzleSolve = () => {
    if (currentPuzzleIndex === puzzles.length - 1) {
      setGameState('completed');
    } else {
      setCurrentPuzzleIndex(currentPuzzleIndex + 1);
      // Add reward item to inventory
      setInventory([...inventory, items[currentPuzzleIndex]]);
    }
  };

  const handleItemUse = (itemId: string) => {
    // Handle item usage logic
    console.log('Using item:', itemId);
  };

  return {
    gameState,
    inventory,
    currentPuzzle: puzzles[currentPuzzleIndex],
    timeLeft,
    handlePuzzleSolve,
    handleItemUse,
  };
};