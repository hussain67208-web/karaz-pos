import { Minus, Plus, Trash2 } from "lucide-react";

export default function OrderCard({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="bg-[#232731] rounded-2xl p-4 flex items-center justify-between">
      <div>
        <h4 className="text-white font-semibold">{item.name}</h4>
        <p className="text-zinc-400 text-sm">{item.price.toLocaleString()} د.ع</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => onDecrease(item.id)} className="w-8 h-8 rounded-lg bg-[#1B1E24] text-white"><Minus size={16} /></button>
        <span className="text-white w-8 text-center">{item.qty}</span>
        <button onClick={() => onIncrease(item.id)} className="w-8 h-8 rounded-lg bg-[#8B0029] text-white"><Plus size={16} /></button>
        <button onClick={() => onRemove(item.id)} className="w-8 h-8 rounded-lg bg-red-600 text-white"><Trash2 size={16} /></button>
      </div>
    </div>
  );
}
