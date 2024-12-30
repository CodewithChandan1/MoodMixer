export type MoodType = 'happy' | 'sad' | 'chill' | 'energetic';

export interface Playlist {
  embedUrl: string;
  title: string;
}

export interface Art {
  imageUrl: string;
  title: string;
  artist: string;
}

export interface Quote {
  text: string;
  author: string;
}