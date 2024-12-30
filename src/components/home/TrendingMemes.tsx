import { TrendingUp } from "lucide-react";
import { MemeCard } from "../meme/MemeCard";
import { memes } from "../../data/memes";

export const TrendingMemes = () => {
  const trendingMemes = memes.slice(0, 3);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-8 h-8 text-indigo-500" />
          <h2 className="text-3xl font-bold">Trending Memes</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingMemes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      </div>
    </section>
  );
};
