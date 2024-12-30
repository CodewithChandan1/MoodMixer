import { Link } from "react-router-dom";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Meme } from "../../types/meme";

interface MemeCardProps {
  meme: Meme;
}

export const MemeCard: React.FC<MemeCardProps> = ({ meme }) => (
  <Link to={`/meme/${meme.id}`}>
    <div className="rounded-xl bg-gray-100 shadow-neumorph hover:shadow-neumorph-hover transition-all overflow-hidden">
      <img
        src={meme.imageUrl}
        alt={meme.title}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={meme.creator.avatar}
            alt={meme.creator.name}
            className="w-8 h-8 rounded-full"
          />
          <span className="font-medium">{meme.creator.name}</span>
        </div>

        <h3 className="text-lg font-semibold mb-3">{meme.title}</h3>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2">
            <Heart className="w-5 h-5" />
            <span>{meme.likes}</span>
          </button>
          <button className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            <span>{meme.comments.length}</span>
          </button>
          <button className="flex items-center gap-2">
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </Link>
);
