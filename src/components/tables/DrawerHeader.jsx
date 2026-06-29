import { X } from "lucide-react";

export default function DrawerHeader({
  table,
  onClose,
}) {

  return (

    <div className="flex justify-between items-center p-5 border-b border-zinc-800">

      <div>

        <h2 className="text-2xl font-bold text-white">

          {table?.name}

        </h2>

        <p className="text-zinc-500 mt-1">

          {table?.section}

        </p>

      </div>

      <button
        onClick={onClose}
        className="w-11 h-11 rounded-xl bg-[#232731] hover:bg-red-600 transition text-white flex items-center justify-center"
      >

        <X size={20} />

      </button>

    </div>

  );

}