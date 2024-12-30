import { Image } from "lucide-react";
import { MoodType } from "../../types/mood";
import { getArtByMood } from "../../utils/moodUtils";

interface ArtGalleryProps {
  mood: MoodType;
}

const ArtGallery: React.FC<ArtGalleryProps> = ({ mood }) => {
  const art = getArtByMood(mood);

  return (
    <div className="p-8 rounded-2xl bg-gray-100 shadow-neumorph">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center shadow-neumorph-colored">
          <Image size={24} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">Inspiring Art</h2>
      </div>

      <div className="rounded-xl overflow-hidden shadow-neumorph-inset">
        <img
          src={art.imageUrl}
          alt={art.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4 bg-white">
          <h3 className="font-medium text-gray-800">{art.title}</h3>
          <p className="text-sm text-gray-600">{art.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default ArtGallery;
