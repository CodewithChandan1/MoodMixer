import { Smile, Frown, Coffee, Zap } from "lucide-react";
import { MoodType } from "../../types/mood";

interface MoodSelectorProps {
  selectedMood: MoodType;
  onMoodSelect: (mood: MoodType) => void;
}

const moods = [
  {
    id: "happy" as MoodType,
    icon: Smile,
    label: "Happy",
    color: "text-yellow-500",
  },
  { id: "sad" as MoodType, icon: Frown, label: "Sad", color: "text-blue-500" },
  {
    id: "chill" as MoodType,
    icon: Coffee,
    label: "Chill",
    color: "text-purple-500",
  },
  {
    id: "energetic" as MoodType,
    icon: Zap,
    label: "Energetic",
    color: "text-red-500",
  },
];

const MoodSelector: React.FC<MoodSelectorProps> = ({
  selectedMood,
  onMoodSelect,
}) => (
  <div className="flex flex-wrap justify-center gap-6">
    {moods.map(({ id, icon: Icon, label, color }) => (
      <button
        key={id}
        onClick={() => onMoodSelect(id)}
        className={`p-6 w-28 rounded-2xl bg-gray-100 flex flex-col items-center gap-3 transition-all
          ${
            selectedMood === id
              ? "shadow-neumorph-inset"
              : "shadow-neumorph hover:shadow-neumorph-hover"
          }`}
      >
        <Icon className={`w-8 h-8 ${color}`} />
        <span className="font-medium text-gray-700">{label}</span>
      </button>
    ))}
  </div>
);

export default MoodSelector;
