import {
  X,
  Plus,
  ArrowRightLeft,
  Combine,
  Printer,
  CreditCard,
} from "lucide-react";

export default function TableDrawer({
  open,
  table,
  onClose,
}) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 z-50">

      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40"
      />

      <div className="absolute left-0 top-0 h-full w-[430px] bg-[#171A20] border-r border-zinc-800 shadow-2xl flex flex-col">

        <div className="flex justify-between items-center p-6 border-b border-zinc-800">

          <div>

            <h2 className="text-white text-2xl font-bold">

              {table?.name}

            </h2>

            <p className="text-zinc-500">

              {table?.section}

            </p>

          </div>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-xl bg-[#232731] text-white hover:bg-red-600 transition"
          >

            <X />

          </button>

        </div>

        <div className="flex-1 overflow-auto p-5 space-y-3">

          <div className="bg-[#222630] rounded-2xl p-4 flex justify-between">

            <span className="text-zinc-400">

              عدد الأشخاص

            </span>

            <span className="text-white font-bold">

              {table?.people}

            </span>

          </div>

          <div className="bg-[#222630] rounded-2xl p-4 flex justify-between">

            <span className="text-zinc-400">

              الطلبات

            </span>

            <span className="text-white font-bold">

              {table?.orders}

            </span>

          </div>

          <div className="bg-[#222630] rounded-2xl p-4 flex justify-between">

            <span className="text-zinc-400">

              الوقت

            </span>

            <span className="text-white font-bold">

              {table?.time}

            </span>

          </div>

          <div className="bg-[#8B0029] rounded-2xl p-5 mt-6">

            <div className="text-zinc-200">

              إجمالي الحساب

            </div>

            <div className="text-white text-3xl font-bold mt-2">

              {table?.total?.toLocaleString()} د.ع

            </div>

          </div>

        </div>

        <div className="border-t border-zinc-800 p-5">

          <div className="grid grid-cols-2 gap-3">

            <button className="bg-[#8B0029] rounded-2xl py-4 text-white flex justify-center gap-2 hover:opacity-90">

              <Plus size={18} />

              إضافة

            </button>

            <button className="bg-[#222630] rounded-2xl py-4 text-white flex justify-center gap-2">

              <CreditCard size={18} />

              دفع

            </button>

            <button className="bg-[#222630] rounded-2xl py-4 text-white flex justify-center gap-2">

              <ArrowRightLeft size={18} />

              نقل

            </button>

            <button className="bg-[#222630] rounded-2xl py-4 text-white flex justify-center gap-2">

              <Combine size={18} />

              دمج

            </button>

            <button className="bg-[#222630] rounded-2xl py-4 text-white flex justify-center gap-2 col-span-2">

              <Printer size={18} />

              طباعة الفاتورة

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}