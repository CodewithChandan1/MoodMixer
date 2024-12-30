import { TrendingMemes } from "../components/home/TrendingMemes";
import { FeaturedPlaylists } from "../components/home/FeaturedPlaylists";
import { Testimonials } from "../components/home/Testimonials";
import { JoinCard } from "../components/home/JoinCard";
import FeatureCard from "../components/FeatureCard";
import { Music, Smile, KeyRound } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
            Unleash Your Creativity and Mood!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a unique blend of music, art, and entertainment through
            our neumorphic interface.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Link to="/mood-player">
            <FeatureCard
              icon={Music}
              title="Mood-Driven Music"
              description="Let your emotions guide you to the perfect playlist. Experience music that resonates with your current mood."
            />
          </Link>
          <Link to="/meme-generator">
            <FeatureCard
              icon={Smile}
              title="Meme Generator"
              description="Create and share hilarious memes with our intuitive neumorphic meme generator interface."
            />
          </Link>
          <Link to="/escape-room">
            <FeatureCard
              icon={KeyRound}
              title="Virtual Escape Room"
              description="Challenge yourself with our immersive virtual escape room experience. Solve puzzles and unlock mysteries."
            />
          </Link>
        </div>
      </div>

      <TrendingMemes />
      <FeaturedPlaylists />
      <Testimonials />
      <JoinCard />
    </>
  );
}

export default Home;
