import { PuzzleType, InventoryItem } from '../types/escape-room';

export const puzzles: PuzzleType[] = [
  {
    id: 'puzzle1',
    title: 'The Ancient Lock',
    description: 'What has keys but no locks, space but no room, and you can enter but not go in?',
    answer: 'keyboard',
    hint: 'Think about something you use every day to type.',
  },
  {
    id: 'puzzle2',
    title: 'The Hidden Code',
    description: 'I am taken from a mine and shut up in a wooden case, from which I am never released, and yet I am used by everyone. What am I?',
    answer: 'pencil lead',
    hint: 'You write with it.',
  },
];

export const items: InventoryItem[] = [
  {
    id: 'key1',
    name: 'Rusty Key',
    description: 'An old key with mysterious markings.',
    canUseWith: ['door1'],
  },
  {
    id: 'note1',
    name: 'Torn Note',
    description: 'A piece of paper with cryptic symbols.',
    canUseWith: ['puzzle2'],
  },
];