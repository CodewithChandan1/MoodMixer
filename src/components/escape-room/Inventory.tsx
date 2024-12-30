import { InventoryItem } from "../../types/escape-room";

interface InventoryProps {
  items: InventoryItem[];
  onItemUse: (itemId: string) => void;
}

export const Inventory: React.FC<InventoryProps> = ({ items, onItemUse }) => (
  <div className="p-6 rounded-xl bg-gray-100 shadow-neumorph">
    <h3 className="text-xl font-semibold mb-4">Inventory</h3>
    <div className="grid grid-cols-2 gap-4">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemUse(item.id)}
          className="p-4 rounded-xl bg-gray-100 shadow-neumorph hover:shadow-neumorph-hover active:shadow-neumorph-inset transition-all text-left"
        >
          <p className="font-medium">{item.name}</p>
          <p className="text-sm text-gray-600">{item.description}</p>
        </button>
      ))}
    </div>
  </div>
);
