import { Type, Image, Palette } from "lucide-react";
import { MemeText } from "../../types/meme";

interface MemeControlsProps {
  texts: MemeText[];
  setTexts: React.Dispatch<React.SetStateAction<MemeText[]>>;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MemeControls: React.FC<MemeControlsProps> = ({
  texts,
  setTexts,
  onImageUpload,
}) => {
  const addText = () => {
    const newText: MemeText = {
      id: `text-${Date.now()}`,
      text: "",
      x: 50,
      y: 50,
      fontSize: 32,
      color: "#ffffff",
    };
    setTexts([...texts, newText]);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl bg-gray-100 shadow-neumorph">
        <label className="block mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Image className="w-5 h-5" />
            <span className="font-medium">Upload Image</span>
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
            className="w-full p-3 rounded-xl bg-gray-100 shadow-neumorph-inset"
          />
        </label>
      </div>

      <div className="p-6 rounded-xl bg-gray-100 shadow-neumorph">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5" />
            <span className="font-medium">Text Layers</span>
          </div>
          <button
            onClick={addText}
            className="p-2 rounded-lg bg-indigo-500 text-white shadow-neumorph-colored"
          >
            Add Text
          </button>
        </div>

        <div className="space-y-4">
          {texts.map((text, index) => (
            <div
              key={text.id}
              className="p-4 rounded-xl bg-gray-100 shadow-neumorph-inset"
            >
              <input
                type="text"
                value={text.text}
                onChange={(e) => {
                  const newTexts = [...texts];
                  newTexts[index] = { ...text, text: e.target.value };
                  setTexts(newTexts);
                }}
                className="w-full p-2 rounded-lg bg-white"
                placeholder="Enter text..."
              />
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="color"
                  value={text.color}
                  onChange={(e) => {
                    const newTexts = [...texts];
                    newTexts[index] = { ...text, color: e.target.value };
                    setTexts(newTexts);
                  }}
                  className="w-8 h-8"
                />
                <input
                  type="number"
                  value={text.fontSize}
                  onChange={(e) => {
                    const newTexts = [...texts];
                    newTexts[index] = {
                      ...text,
                      fontSize: Number(e.target.value),
                    };
                    setTexts(newTexts);
                  }}
                  className="w-20 p-2 rounded-lg bg-white"
                  min="12"
                  max="72"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
