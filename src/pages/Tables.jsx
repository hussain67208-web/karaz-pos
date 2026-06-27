import { useMemo, useState } from "react";

import TableToolbar from "../components/tables/TableToolbar";
import TableFilters from "../components/tables/TableFilters";
import TableCard from "../components/tables/TableCard";

const tablesData = [
  {
    id: 1,
    name: "T1",
    section: "الصالة الرئيسية",
    people: 4,
    orders: 5,
    time: "00:35",
    total: 48000,
    status: "busy",
    newOrders: 2,
    callWaiter: false,
    vip: false,
  },
  {
    id: 2,
    name: "T2",
    section: "الصالة الرئيسية",
    people: 0,
    orders: 0,
    time: "--",
    total: 0,
    status: "empty",
    newOrders: 0,
    callWaiter: false,
    vip: false,
  },
  {
    id: 3,
    name: "VIP 1",
    section: "VIP",
    people: 5,
    orders: 9,
    time: "01:12",
    total: 137000,
    status: "payment",
    newOrders: 1,
    callWaiter: true,
    vip: true,
  },
  {
    id: 4,
    name: "T4",
    section: "الحديقة",
    people: 2,
    orders: 2,
    time: "00:18",
    total: 29000,
    status: "busy",
    newOrders: 0,
    callWaiter: false,
    vip: false,
  },
  {
    id: 5,
    name: "T5",
    section: "الحديقة",
    people: 0,
    orders: 0,
    time: "--",
    total: 0,
    status: "reserved",
    newOrders: 0,
    callWaiter: false,
    vip: false,
  },
  {
    id: 6,
    name: "T6",
    section: "العوائل",
    people: 0,
    orders: 0,
    time: "--",
    total: 0,
    status: "cleaning",
    newOrders: 0,
    callWaiter: false,
    vip: false,
  },
];

export default function Tables() {

  const [tables] = useState(tablesData);

  const [search, setSearch] = useState("");

  const [selectedSection, setSelectedSection] = useState("all");

  const [viewMode, setViewMode] = useState("grid");

  const sections = [
    { id: "main", name: "الصالة الرئيسية" },
    { id: "garden", name: "الحديقة" },
    { id: "vip", name: "VIP" },
    { id: "family", name: "العوائل" },
  ];

  const filteredTables = useMemo(() => {

    return tables.filter((table) => {

      const matchSearch =
        table.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchSection =
        selectedSection === "all" ||
        table.section ===
          sections.find(
            s => s.id === selectedSection
          )?.name;

      return matchSearch && matchSection;

    });

  }, [tables, search, selectedSection]);

  const stats = {
    empty: tables.filter(t => t.status === "empty").length,
    busy: tables.filter(t => t.status === "busy").length,
    payment: tables.filter(t => t.status === "payment").length,
    vip: tables.filter(t => t.vip).length,
  };

  return (

    <div>

      <TableToolbar
        search={search}
        setSearch={setSearch}
        sections={sections}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onRefresh={() => {}}
        onAddTable={() => {}}
      />

      <TableFilters
        stats={stats}
      />

      {viewMode === "grid" ? (

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">

          {filteredTables.map((table) => (

            <TableCard
              key={table.id}
              table={table}
              onClick={(table) => {

                console.log(table);

              }}
            />

          ))}

        </div>

      ) : (

        <div className="bg-[#1B1E24] rounded-3xl border border-zinc-800 h-[650px] flex items-center justify-center text-zinc-500 text-xl">

          Floor Plan قريباً

        </div>

      )}

    </div>

  );

}