import { MoodType, Playlist, Art, Quote } from '../types/mood';

// export const getPlaylistByMood = (mood: MoodType): Playlist => {
//   const playlists = {
//     happy: {
//       embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0',
//       title: 'Happy Hits'
//     },
//     sad: {
//       embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1',
//       title: 'Sad Hours'
//     },
//     chill: {
//       embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6',
//       title: 'Chill Hits'
//     },
//     energetic: {
//       embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP',
//       title: 'Beast Mode'
//     }
//   };
  
//   return playlists[mood];
// };
export const getPlaylistByMood = (mood: MoodType): Playlist[] => {
  const playlists = {
    happy: [
      {
        embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0',
        title: 'Happy Hits'
      },
     {
        embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1E4oJSdHZrVjxD',
        title: 'Ambient Chill'
      }
    ],
    sad: [
      {
        embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1',
        title: 'Sad Hours'
      },
      {
        embedUrl: 'https://open.spotify.com/embed/playlist/7qxn6GsFH77ghVtKzOnAYA',
        title: 'Heartbreak'
      },
    
    ],
    chill: [
      {
        embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgoIcn6',
        title: 'Chill Hits'
      },
      {
        embedUrl: 'https://open.spotify.com/embed/episode/31YBE5jSvjwFu6kUWsfxW6',
        title: 'Lofi Chill'
      },
  
    ],
    energetic: [
      {
        embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX76Wlfdnj7AP',
        title: 'Beast Mode'
      },
       {
        embedUrl: 'https://open.spotify.com/embed/playlist/1QWAub6rP8cxQ3RsHheZij',
        title: 'Chill Pop'
      },
    
    ]
  };

  return playlists[mood];
};

export const getArtByMood = (mood: MoodType): Art => {
  const art = {
    happy: {
      imageUrl: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a',
      title: 'Spring Joy',
      artist: 'Nature\'s Canvas'
    },
    sad: {
      imageUrl: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63',
      title: 'Peaceful Rain',
      artist: 'Urban Moments'
    },
    chill: {
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      title: 'Serene Beach',
      artist: 'Coastal Dreams'
    },
    energetic: {
      imageUrl: 'https://images.unsplash.com/photo-1520962880247-cfaf541c8724',
      title: 'Dynamic Sunrise',
      artist: 'Mountain Peak'
    }
  };
  
  return art[mood];
};

export const getQuoteByMood = (mood: MoodType): Quote => {
  const quotes = {
    happy: {
      text: 'Happiness is not something ready made. It comes from your own actions.',
      author: 'Dalai Lama'
    },
    sad: {
      text: 'Even the darkest night will end and the sun will rise.',
      author: 'Victor Hugo'
    },
    chill: {
      text: 'Life is really simple, but we insist on making it complicated.',
      author: 'Confucius'
    },
    energetic: {
      text: 'The only way to do great work is to love what you do.',
      author: 'Steve Jobs'
    }
  };
  
  return quotes[mood];
};