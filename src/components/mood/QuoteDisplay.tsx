import { Quote } from "lucide-react";
import { MoodType } from "../../types/mood";
import { getQuoteByMood } from "../../utils/moodUtils";

interface QuoteDisplayProps {
  mood: MoodType;
}

const QuoteDisplay: React.FC<QuoteDisplayProps> = ({ mood }) => {
  const quote = getQuoteByMood(mood);

  return (
    <div className="p-8 rounded-2xl bg-gray-100 shadow-neumorph">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center shadow-neumorph-colored">
          <Quote size={24} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Daily Quote</h2>
      </div>

      <blockquote className="p-6 rounded-xl shadow-neumorph-inset bg-white">
        <p className="text-lg text-gray-700 italic mb-4">{quote.text}</p>
        <footer className="text-sm text-gray-600">— {quote.author}</footer>
      </blockquote>
    </div>
  );
};

export default QuoteDisplay;
