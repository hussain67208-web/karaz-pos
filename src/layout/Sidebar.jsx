import {
  LayoutDashboard,
  UtensilsCrossed,
  Receipt,
  Coffee,
  ChefHat,
  Flame,
  Gamepad2,
  QrCode,
  Package,
  Wallet,
  Users,
  BarChart3,
  MessageCircle,
  Settings,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const menu = [
  {
    key: "dashboard",
    title: "الرئيسية",
    icon: LayoutDashboard,
  },
  {
    key: "tables",
    title: "الطاولات",
    icon: UtensilsCrossed,
  },
  {
    key: "cashier",
    title: "الكاشير",
    icon: Receipt,
  },
  {
    key: "bar",
    title: "البار",
    icon: Coffee,
  },
  {
    key: "kitchen",
    title: "المطبخ",
    icon: ChefHat,
  },
  {
    key: "hookah",
    title: "الأراكيل",
    icon: Flame,
  },
  {
    key: "games",
    title: "الألعاب",
    icon: Gamepad2,
  },
  {
    key: "qrmenu",
    title: "المنيو الإلكتروني",
    icon: QrCode,
  },
  {
    key: "inventory",
    title: "المخزن",
    icon: Package,
  },
  {
    key: "accounts",
    title: "الحسابات",
    icon: Wallet,
  },
  {
    key: "employees",
    title: "الموظفون",
    icon: Users,
  },
  {
    key: "reports",
    title: "التقارير",
    icon: BarChart3,
  },
  {
    key: "messages",
    title: "الرسائل",
    icon: MessageCircle,
  },
  {
    key: "settings",
    title: "الإعدادات",
    icon: Settings,
  },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  page,
  setPage,
}) {
  return (
    <aside
      className={`${
        collapsed ? "w-24" : "w-72"
      } bg-[#0D0F11] border-r border-zinc-800 flex flex-col duration-300`}
    >
      <div className="h-20 border-b border-zinc-800 flex items-center justify-between px-5">

        {!collapsed && (
          <div>

            <h1 className="text-white text-2xl font-bold">
              🍒 KERAZ
            </h1>

            <p className="text-zinc-500 text-sm">
              POS Management System
            </p>

          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-zinc-400 hover:text-white duration-300"
        >
          {collapsed ? (
            <ChevronRight size={22} />
          ) : (
            <ChevronLeft size={22} />
          )}
        </button>

      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl mb-2 transition-all duration-300 ${
                page === item.key
                  ? "bg-[#8B0029] text-white shadow-lg"
                  : "text-zinc-400 hover:bg-[#20242B] hover:text-white"
              }`}
            >

              <Icon size={21} />

              {!collapsed && (
                <span className="font-medium">
                  {item.title}
                </span>
              )}

            </button>
          );

        })}

      </div>

      <div className="border-t border-zinc-800 p-5">

        {!collapsed && (

          <>
            <div className="text-white font-semibold">
              Keraz POS
            </div>

            <div className="text-zinc-500 text-sm">
              Version 2.0
            </div>
          </>

        )}

      </div>

    </aside>
  );
}