import { useState } from "react";

import Layout from "./layout/Layout";

import Dashboard from "./pages/Dashboard";
import Tables from "./pages/Tables";
import Cashier from "./pages/Cashier";
import Menu from "./pages/Menu";
import Hookah from "./pages/Hookah";
import Employees from "./pages/Employees";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

export default function App() {

  const [page, setPage] = useState("dashboard");

  function EmptyPage({ title }) {
    return (
      <div className="text-white">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-zinc-400">
          سيتم بناء هذه الصفحة قريباً.
        </p>
      </div>
    );
  }

  function renderPage() {

    switch (page) {

      case "dashboard":
        return <Dashboard />;

      case "tables":
        return <Tables />;

      case "cashier":
        return <Cashier />;

      case "bar":
        return <Menu />;

      case "kitchen":
        return <EmptyPage title="👨‍🍳 المطبخ" />;

      case "hookah":
        return <Hookah />;

      case "games":
        return <EmptyPage title="🎮 الألعاب" />;

      case "qrmenu":
        return <EmptyPage title="📱 المنيو الإلكتروني" />;

      case "inventory":
        return <EmptyPage title="📦 المخزن" />;

      case "accounts":
        return <EmptyPage title="💰 الحسابات" />;

      case "employees":
        return <Employees />;

      case "reports":
        return <Reports />;

      case "messages":
        return <EmptyPage title="💬 الرسائل وواتساب" />;

      case "settings":
        return <Settings />;

      default:
        return <Dashboard />;

    }

  }

  return (
    <Layout
      page={page}
      setPage={setPage}
    >
      {renderPage()}
    </Layout>
  );

}