export interface PuzzleType {
  id: string;
  title: string;
  description: string;
  answer: string;
  hint?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  canUseWith?: string[];
}

export type GameState = 'not_started' | 'in_progress' | 'completed' | 'failed';