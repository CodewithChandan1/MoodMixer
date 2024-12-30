import { Music } from "lucide-react";

const playlists = [
  {
    id: "1",
    title: "Chill Vibes",
    description: "Perfect for relaxing and unwinding",
    image: "https://images.unsplash.com/photo-1519638399535-1b036603ac77",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6",
  },
  {
    id: "2",
    title: "Workout Energy",
    description: "High-energy tracks for your workout",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
    embedUrl: "https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP",
  },
];

export const FeaturedPlaylists = () => (
  <section className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center gap-3 mb-8">
        <Music className="w-8 h-8 text-indigo-500" />
        <h2 className="text-3xl font-bold">Featured Playlists</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="p-6 rounded-xl bg-gray-100 shadow-neumorph"
          >
            <img
              src={playlist.image}
              alt={playlist.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{playlist.title}</h3>
            <p className="text-gray-600 mb-4">{playlist.description}</p>
            <div className="aspect-video">
              <iframe
                src={playlist.embedUrl}
                width="100%"
                height="125%"
                frameBorder="0"
                allow="encrypted-media"
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
