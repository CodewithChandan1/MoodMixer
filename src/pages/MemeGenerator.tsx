import React, { useState } from 'react';
import { Upload, Type, Share2 } from 'lucide-react';
import { MemeControls } from '../components/meme/MemeControls';
import { MemePreview } from '../components/meme/MemePreview';
import { MemeText } from '../types/meme';

function MemeGenerator() {
  const [image, setImage] = useState<string | null>(null);
  const [texts, setTexts] = useState<MemeText[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
        Meme Generator
      </h1>

      <div className="grid lg:grid-cols-2 gap-8">
        <MemeControls
          texts={texts}
          setTexts={setTexts}
          onImageUpload={handleImageUpload}
        />
        <MemePreview
          image={image}
          texts={texts}
        />
      </div>
    </div>
  );
}

export default MemeGenerator;