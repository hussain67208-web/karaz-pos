import {
  Bell,
  Search,
  Moon,
  UserCircle2,
  CalendarDays,
  Wifi,
} from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("ar-IQ", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="h-20 bg-[#0D0F11] border-b border-zinc-800 flex items-center justify-between px-8">

      <div className="relative w-[420px]">

        <Search
          size={18}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          placeholder="بحث..."
          className="w-full h-12 rounded-2xl bg-[#1A1D21] border border-zinc-700 text-white pr-12 pl-5 outline-none focus:border-[#8B0029]"
        />

      </div>

      <div className="flex items-center gap-4">

        <div className="hidden xl:flex items-center gap-2 text-zinc-400">

          <CalendarDays size={18} />

          <span className="text-sm">{today}</span>

        </div>

        <div className="hidden lg:flex items-center gap-2 bg-[#1A1D21] px-4 py-2 rounded-xl">

          <Wifi
            size={18}
            className="text-green-500"
          />

          <span className="text-sm text-zinc-300">

            متصل

          </span>

        </div>

        <button className="w-11 h-11 rounded-xl bg-[#1A1D21] hover:bg-[#8B0029] duration-300 flex items-center justify-center">

          <Moon color="white" size={20} />

        </button>

        <button className="relative w-11 h-11 rounded-xl bg-[#1A1D21] hover:bg-[#8B0029] duration-300 flex items-center justify-center">

          <Bell color="white" size={20} />

          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></span>

        </button>

        <div className="flex items-center gap-3 bg-[#1A1D21] rounded-2xl px-3 py-2">

          <UserCircle2
            size={42}
            className="text-white"
          />

          <div>

            <div className="text-white font-semibold">

              حسين خالد

            </div>

            <div className="text-zinc-500 text-sm">

              مدير النظام

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}