// import { Music } from "lucide-react";
// import { MoodType } from "../../types/mood";
// import { getPlaylistByMood } from "../../utils/moodUtils";

// interface PlaylistWidgetProps {
//   mood: MoodType;
// }

// const PlaylistWidget: React.FC<PlaylistWidgetProps> = ({ mood }) => {
//   const playlist = getPlaylistByMood(mood);

//   return (
//     <div className="p-8 rounded-2xl bg-gray-100 shadow-neumorph">
//       <div className="flex items-center gap-4 mb-6">
//         <div className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center shadow-neumorph-colored">
//           <Music size={24} />
//         </div>
//         <h2 className="text-2xl font-semibold text-gray-800">
//           Your {mood} Playlist
//         </h2>
//       </div>

//       <div className="aspect-video rounded-xl overflow-hidden shadow-neumorph-inset bg-white">
//         <iframe
//           src={playlist.embedUrl}
//           width="100%"
//           height="100%"
//           frameBorder="0"
//           allow="encrypted-media"
//           className="p-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default PlaylistWidget;
import { Music } from "lucide-react";
import { MoodType } from "../../types/mood";
import { getPlaylistByMood } from "../../utils/moodUtils";

interface PlaylistWidgetProps {
  mood: MoodType;
}

const PlaylistWidget: React.FC<PlaylistWidgetProps> = ({ mood }) => {
  const playlists = getPlaylistByMood(mood);

  return (
    <div className="p-8 rounded-2xl bg-gray-100 shadow-neumorph">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center shadow-neumorph-colored">
          <Music size={24} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Your {mood} Playlists
        </h2>
      </div>

      {playlists.length === 0 ? (
        <p>No playlists available for this mood.</p>
      ) : (
        playlists.map((playlist, index) => (
          <div key={index} className="mb-8">
            <div className="aspect-video rounded-xl overflow-hidden shadow-neumorph-inset bg-white">
              <iframe
                src={playlist.embedUrl}
                width="100%"
                height="125%"
                frameBorder="0"
                allow="encrypted-media"
                className="p-2"
              />
            </div>
            <p className="text-center mt-2 text-lg font-semibold text-gray-800">
              {playlist.title}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default PlaylistWidget;
