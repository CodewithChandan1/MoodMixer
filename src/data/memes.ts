import { Meme } from '../types/meme';

export const memes: Meme[] = [
  {
    id: '1',
    imageUrl: 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621',
    title: 'When code finally works',
    creator: {
      id: 'user1',
      name: 'John Dev',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    texts: [
      {
        id: 't1',
        text: 'When the code works',
        x: 50,
        y: 50,
        fontSize: 32,
        color: '#ffffff',
      },
      {
        id: 't2',
        text: 'But you don\'t know why',
        x: 50,
        y: 200,
        fontSize: 32,
        color: '#ffffff',
      },
    ],
    likes: 156,
    comments: [
      {
        id: 'c1',
        user: {
          id: 'user2',
          name: 'Alice Coder',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        },
        text: 'Story of my life! 😂',
        createdAt: '2024-03-15T10:30:00Z',
      },
    ],
    createdAt: '2024-03-15T09:00:00Z',
  },
 {
  id: '2',
  imageUrl: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6',
  title: 'Debugging feels like this',
  creator: {
    id: 'user3',
    name: 'Jane Fix',
    avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
  },
  texts: [
    {
      id: 't1',
      text: 'Debugging is like being a detective',
      x: 50,
      y: 50,
      fontSize: 28,
      color: '#000000',
    },
    {
      id: 't2',
      text: 'In a crime scene you created',
      x: 50,
      y: 200,
      fontSize: 28,
      color: '#000000',
    },
  ],
  likes: 234,
  comments: [
    {
      id: 'c1',
      user: {
        id: 'user4',
        name: 'Bob Builder',
        avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df',
      },
      text: 'This hits way too close to home!',
      createdAt: '2024-03-16T14:15:00Z',
    },
  ],
  createdAt: '2024-03-16T12:00:00Z',
},
{
  id: '3',
  imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61',
  title: 'When it compiles without errors',
  creator: {
    id: 'user5',
    name: 'Mike Compile',
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a',
  },
  texts: [
    {
      id: 't1',
      text: 'Compilation complete!',
      x: 50,
      y: 50,
      fontSize: 30,
      color: '#222222',
    },
    {
      id: 't2',
      text: 'But it doesn\'t run as expected',
      x: 50,
      y: 200,
      fontSize: 30,
      color: '#222222',
    },
  ],
  likes: 198,
  comments: [
    {
      id: 'c1',
      user: {
        id: 'user6',
        name: 'Sara Syntax',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      },
      text: 'I felt that! 😂',
      createdAt: '2024-03-17T08:45:00Z',
    },
    {
      id: 'c2',
      user: {
        id: 'user7',
        name: 'Charlie Code',
        avatar: 'https://images.unsplash.com/photo-1530577197743-7adf14294584',
      },
      text: 'Story of a developer’s life.',
      createdAt: '2024-03-17T09:00:00Z',
    },
  ],
  createdAt: '2024-03-17T08:00:00Z',
}

  // Add more memes here
];