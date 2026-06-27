import {
  Circle,
  Armchair,
  Receipt,
  Sparkles,
} from "lucide-react";

export default function TableFilters({ stats }) {

  const cards = [
    {
      title: "فارغة",
      value: stats.empty,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      icon: Circle,
    },
    {
      title: "مشغولة",
      value: stats.busy,
      color: "text-red-500",
      bg: "bg-red-500/10",
      icon: Armchair,
    },
    {
      title: "بانتظار الحساب",
      value: stats.payment,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      icon: Receipt,
    },
    {
      title: "VIP",
      value: stats.vip,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      icon: Sparkles,
    },
  ];

  return (

    <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-5 mb-6">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="bg-[#1B1E24] rounded-3xl border border-zinc-800 p-5 transition hover:border-[#8B0029]"
          >

            <div className="flex justify-between items-center">

              <div>

                <div className="text-zinc-500">

                  {card.title}

                </div>

                <div className="text-white text-3xl font-bold mt-3">

                  {card.value}

                </div>

              </div>

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.bg}`}
              >

                <Icon
                  size={26}
                  className={card.color}
                />

              </div>

            </div>

          </div>

        );

      })}

    </div>

  );

}