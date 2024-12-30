import { Clock } from "lucide-react";

interface TimerProps {
  timeLeft: number;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="p-4 mb-6 rounded-xl bg-gray-100 shadow-neumorph flex items-center gap-3">
      <Clock className="text-indigo-500" />
      <span className="text-2xl font-bold">
        {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
      </span>
    </div>
  );
};
