import { useMemo, useState } from "react";

import TableToolbar from "../components/tables/TableToolbar";
import TableFilters from "../components/tables/TableFilters";
import TableCard from "../components/tables/TableCard";
import TableDrawer from "../components/tables/TableDrawer";

import { useTableStore } from "../store/tableStore";

export default function Tables() {

const tables = useTableStore((state) => state.tables);

  const [search, setSearch] = useState("");

  const [selectedSection, setSelectedSection] = useState("all");

  const [viewMode, setViewMode] = useState("grid");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const [selectedTable, setSelectedTable] = useState(null);

  const sections = [

    {

      id: "main",

      name: "الصالة الرئيسية",

    },

    {

      id: "garden",

      name: "الحديقة",

    },

    {

      id: "vip",

      name: "VIP",

    },

  ];

  const filteredTables = useMemo(() => {

    return tables.filter(table => {

      const searchMatch = table.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const sectionMatch =

        selectedSection === "all"

        ||

        table.section ===

        sections.find(

          s => s.id === selectedSection

        )?.name;

      return searchMatch && sectionMatch;

    });

  }, [

    tables,

    search,

    selectedSection,

  ]);

  const stats = {

    empty: tables.filter(

      t => t.status === "empty"

    ).length,

    busy: tables.filter(

      t => t.status === "busy"

    ).length,

    payment: tables.filter(

      t => t.status === "payment"

    ).length,

    vip: tables.filter(

      t => t.vip

    ).length,

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

      <TableFilters stats={stats} />

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-5">

        {filteredTables.map(table => (

          <TableCard

            key={table.id}

            table={table}

            onClick={() => {

              setSelectedTable(table);

              setDrawerOpen(true);

            }}

          />

        ))}

      </div>

      <TableDrawer

        open={drawerOpen}

        table={selectedTable}

        onClose={() => setDrawerOpen(false)}

      />

    </div>

  );

}