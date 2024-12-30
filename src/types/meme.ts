export interface MemeText {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  color: string;
}

export interface Meme {
  id: string;
  imageUrl: string;
  title: string;
  creator: {
    id: string;
    name: string;
    avatar: string;
  };
  texts: MemeText[];
  likes: number;
  comments: Comment[];
  createdAt: string;
}

export interface Comment {
  id: string;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  text: string;
  createdAt: string;
}