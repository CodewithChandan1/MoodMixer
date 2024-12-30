import React, { useState } from 'react';
import { PuzzleType } from '../../types/escape-room';

interface PuzzleProps {
  puzzle: PuzzleType;
  onSolve: () => void;
}

export const Puzzle: React.FC<PuzzleProps> = ({ puzzle, onSolve }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase() === puzzle.answer.toLowerCase()) {
      onSolve();
    }
  };

  return (
    <div className="p-6 rounded-xl bg-gray-100 shadow-neumorph">
      <h3 className="text-xl font-semibold mb-4">{puzzle.title}</h3>
      <p className="mb-6 text-gray-600">{puzzle.description}</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="w-full p-3 rounded-xl bg-gray-100 shadow-neumorph-inset focus:outline-none"
          placeholder="Enter your answer..."
        />
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-indigo-500 text-white shadow-neumorph-colored"
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
};