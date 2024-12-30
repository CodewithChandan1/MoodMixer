import { useParams } from "react-router-dom";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { memes } from "../data/memes";

function MemeDetails() {
  const { id } = useParams<{ id: string }>();
  const meme = memes.find((m) => m.id === id);

  if (!meme) {
    return <div>Meme not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="rounded-xl bg-gray-100 shadow-neumorph overflow-hidden">
        <img
          src={meme.imageUrl}
          alt={meme.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img
                src={meme.creator.avatar}
                alt={meme.creator.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-medium">{meme.creator.name}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(meme.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2">
                <Heart className="w-6 h-6" />
                <span>{meme.likes}</span>
              </button>
              <button className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span>{meme.comments.length}</span>
              </button>
              <button>
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>

          <h2 className="text-2xl font-bold mb-8">{meme.title}</h2>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Comments</h3>
            {meme.comments.map((comment) => (
              <div
                key={comment.id}
                className="p-4 rounded-xl bg-white shadow-neumorph-inset"
              >
                <div className="flex items-center gap-3 mb-2">
                  <img
                    src={comment.user.avatar}
                    alt={comment.user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{comment.user.name}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700">{comment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemeDetails;
