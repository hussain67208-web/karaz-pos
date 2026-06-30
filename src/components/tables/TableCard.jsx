import {
  Users,
  Clock3,
  Receipt,
  Bell,
  Sparkles,
} from "lucide-react";

const statusConfig = {
  empty: {
    title: "فارغة",
    color: "bg-emerald-500",
    border: "border-emerald-500",
  },

  busy: {
    title: "مشغولة",
    color: "bg-red-500",
    border: "border-red-500",
  },

  reserved: {
    title: "محجوزة",
    color: "bg-amber-500",
    border: "border-amber-500",
  },

  cleaning: {
    title: "تنظيف",
    color: "bg-sky-500",
    border: "border-sky-500",
  },

  payment: {
    title: "بانتظار الحساب",
    color: "bg-purple-500",
    border: "border-purple-500",
  },
};

export default function TableCard({
  table,
  onClick,
}) {

  const status =
    statusConfig[table.status] ||
    statusConfig.empty;

  return (

    <div
      onClick={() => onClick(table)}
      className={`
        relative
        bg-[#1B1E24]
        rounded-3xl
        border
        ${status.border}
        p-5
        cursor-pointer
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-2xl
      `}
    >

      {table.newOrders > 0 && (

        <div className="absolute top-4 left-4 bg-[#8B0029] text-white rounded-full px-3 py-1 text-xs font-bold">

          +{table.newOrders}

        </div>

      )}

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-white text-2xl font-bold">

            {table.name}

          </h2>

          <p className="text-zinc-500 mt-1">

            {table.section}

          </p>

        </div>

        <div
          className={`w-4 h-4 rounded-full ${status.color}`}
        />

      </div>

      <div className="mt-6 space-y-3">

        <div className="flex justify-between text-zinc-300">

          <span className="flex gap-2 items-center">

            <Users size={18} />

            الأشخاص

          </span>

          <strong>

            {table.people}

          </strong>

        </div>

        <div className="flex justify-between text-zinc-300">

          <span className="flex gap-2 items-center">

            <Receipt size={18} />

            الطلبات

          </span>

        <strong>
  {table.orders.reduce((sum, item) => sum + item.qty, 0)}
</strong>

        </div>

        <div className="flex justify-between text-zinc-300">

          <span className="flex gap-2 items-center">

            <Clock3 size={18} />

            الوقت

          </span>

          <strong>

            {table.time}

          </strong>

        </div>

      </div>

      <div className="mt-6">

        <div className="text-zinc-500 text-sm">

          الحساب الحالي

        </div>

        <div className="text-2xl text-white font-bold mt-1">

          {(table.total || 0).toLocaleString()} د.ع

        </div>

      </div>

      <div className="mt-5 flex justify-between items-center">

        <span
          className={`
            text-xs
            rounded-full
            px-3
            py-1
            text-white
            ${status.color}
          `}
        >

          {status.title}

        </span>

        <div className="flex gap-2">

          {table.callWaiter && (

            <Bell
              size={18}
              className="text-yellow-400"
            />

          )}

          {table.vip && (

            <Sparkles
              size={18}
              className="text-amber-400"
            />

          )}

        </div>

      </div>

    </div>

  );

}