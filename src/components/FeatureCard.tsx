import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="p-8 rounded-2xl bg-gray-100 shadow-neumorph hover:shadow-neumorph-hover transition-all duration-300 cursor-pointer">
    <div className="w-12 h-12 mb-6 rounded-lg bg-indigo-500 text-white flex items-center justify-center shadow-neumorph-colored">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
