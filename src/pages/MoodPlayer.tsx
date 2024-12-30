import  { useState } from 'react';
import MoodSelector from '../components/mood/MoodSelector';
import PlaylistWidget from '../components/mood/PlaylistWidget';
import ArtGallery from '../components/mood/ArtGallery';
import QuoteDisplay from '../components/mood/QuoteDisplay';
import { MoodType } from '../types/mood';

const MoodPlayer = () => {
  const [selectedMood, setSelectedMood] = useState<MoodType>('chill');

  return (

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          Mood-Driven Music & Art
        </h1>
        
        <MoodSelector selectedMood={selectedMood} onMoodSelect={setSelectedMood} />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          <PlaylistWidget mood={selectedMood} />
          <div className="space-y-8">
            <ArtGallery mood={selectedMood} />
            <QuoteDisplay mood={selectedMood} />
          </div>
        </div>
      </div>

  );
}

export default MoodPlayer;