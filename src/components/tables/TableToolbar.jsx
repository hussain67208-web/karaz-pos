import {
  Search,
  Plus,
  LayoutGrid,
  Map,
  RefreshCw,
} from "lucide-react";

export default function TableToolbar({
  search,
  setSearch,

  sections,
  selectedSection,
  setSelectedSection,

  viewMode,
  setViewMode,

  onRefresh,
  onAddTable,
}) {

  return (

    <div className="bg-[#1B1E24] rounded-3xl border border-zinc-800 p-6 mb-6">

      <div className="flex flex-wrap items-center justify-between gap-4">

        <div>

          <h1 className="text-3xl font-bold text-white">

            🍽 الطاولات

          </h1>

          <p className="text-zinc-500 mt-1">

            إدارة الطاولات والطلبات

          </p>

        </div>

        <div className="flex gap-3">

          <button
            onClick={onRefresh}
            className="w-12 h-12 rounded-2xl bg-[#15171C] hover:bg-[#252932] text-zinc-300 flex justify-center items-center transition"
          >

            <RefreshCw size={20} />

          </button>

          <button
            onClick={onAddTable}
            className="bg-[#8B0029] hover:bg-[#A00034] text-white px-5 rounded-2xl flex items-center gap-2 transition"
          >

            <Plus size={18} />

            إضافة طاولة

          </button>

        </div>

      </div>

      <div className="grid xl:grid-cols-4 gap-4 mt-6">

        <div className="relative">

          <Search
            size={18}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500"
          />

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="بحث عن طاولة..."
            className="w-full bg-[#15171C] border border-zinc-700 rounded-2xl py-3 pr-12 pl-4 text-white outline-none focus:border-[#8B0029]"
          />

        </div>

        <select
          value={selectedSection}
          onChange={(e)=>setSelectedSection(e.target.value)}
          className="bg-[#15171C] border border-zinc-700 rounded-2xl px-4 text-white"
        >

          <option value="all">

            جميع الأقسام

          </option>

          {sections.map((section)=>(

            <option
              key={section.id}
              value={section.id}
            >

              {section.name}

            </option>

          ))}

        </select>

        <div className="flex gap-3">

          <button
            onClick={()=>setViewMode("grid")}
            className={`flex-1 py-3 rounded-2xl flex justify-center transition ${
              viewMode==="grid"
              ? "bg-[#8B0029] text-white"
              : "bg-[#15171C] text-zinc-400"
            }`}
          >

            <LayoutGrid size={20} />

          </button>

          <button
            onClick={()=>setViewMode("floor")}
            className={`flex-1 py-3 rounded-2xl flex justify-center transition ${
              viewMode==="floor"
              ? "bg-[#8B0029] text-white"
              : "bg-[#15171C] text-zinc-400"
            }`}
          >

            <Map size={20} />

          </button>

        </div>

        <div className="flex items-center justify-end text-zinc-500">

          إجمالي الطاولات

        </div>

      </div>

    </div>

  );

}