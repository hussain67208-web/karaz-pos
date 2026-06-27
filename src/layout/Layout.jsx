import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({
  children,
  page,
  setPage,
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#111315] overflow-hidden">

      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        page={page}
        setPage={setPage}
      />

      <div className="flex flex-col flex-1 overflow-hidden">

        <Header />

        <main className="flex-1 overflow-y-auto bg-[#15171C] p-6">

          {children}

        </main>

      </div>

    </div>
  );
}