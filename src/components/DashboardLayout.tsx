import { Outlet } from "react-router-dom";
import { CaretLeft, CaretRight, List, X } from "@phosphor-icons/react";
import { useState } from "react";

export const DashboardLayout = () => {
  const [sideOpen, setSideOpen] = useState(false);

  const toggleSideOpen = (): void => setSideOpen(!sideOpen);

  return (
    <main className="flex flex-col h-full">
      <header
        className={`fixed bg-white h-16 px-4 w-full border-b border-gray-200/70 transition-all duration-200 flex items-center justify-between`}
      >
        <div className="flex items-center gap-8">
          <button
            onClick={toggleSideOpen}
            className={`p-1 border border-gray-200 rounded-full active:scale-95 ${
              sideOpen || "hidden sm:block"
            }`}
          >
            {sideOpen ? <CaretLeft size={20} /> : <CaretRight size={20} />}
          </button>
          <strong className="text-2xl tracking-wide uppercase">Sistema1</strong>
        </div>
      </header>
      <div className="h-full mt-16 flex">
        <aside
          className={`transition-all duration-200 bg-white h-full w-64 shadow-md flex flex-col fixed sm:static ${
            sideOpen
              ? "translate-x-0"
              : "-translate-x-64 sm:translate-x-0 sm:w-16"
          }`}
        ></aside>
        <div className="p-4 bg-gray-50 h-full flex-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
