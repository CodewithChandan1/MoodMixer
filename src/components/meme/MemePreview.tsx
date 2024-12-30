import { MemeText } from "../../types/meme";

interface MemePreviewProps {
  image: string | null;
  texts: MemeText[];
}

export const MemePreview: React.FC<MemePreviewProps> = ({ image, texts }) => {
  return (
    <div className="p-6 rounded-xl bg-gray-100 shadow-neumorph">
      <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
        {image ? (
          <img
            src={image}
            alt="Meme preview"
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Upload an image to start
          </div>
        )}
        {texts.map((text) => (
          <div
            key={text.id}
            style={{
              position: "absolute",
              left: `${text.x}%`,
              top: `${text.y}%`,
              transform: "translate(-50%, -50%)",
              color: text.color,
              fontSize: `${text.fontSize}px`,
              textShadow: "2px 2px 0 #000",
              fontFamily: "Impact",
              textAlign: "center",
              userSelect: "none",
            }}
          >
            {text.text}
          </div>
        ))}
      </div>
    </div>
  );
};
