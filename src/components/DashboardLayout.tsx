import { Outlet, useNavigate } from "react-router-dom";
import { CaretLeft, CaretRight, SignOut } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Preloader } from "./Preloader";

export const DashboardLayout = () => {
  const [loading, setLoading] = useState(true);
  const { user, signOut } = useAuth();
  const [sideOpen, setSideOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => setLoading(false), []);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user]);

  const toggleSideOpen = (): void => setSideOpen(!sideOpen);

  if (loading) return <Preloader />;

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
            {sideOpen ? <CaretLeft /> : <CaretRight />}
          </button>
          <strong className="text-2xl tracking-wide uppercase">Sistema1</strong>
        </div>
        <div className="flex items-center gap-4">
          <strong className="text-sm tracking-wide">{user?.name}</strong>
          <button
            onClick={signOut}
            className="p-1 border border-gray-200 rounded-full active:scale-95"
          >
            <SignOut />
          </button>
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
