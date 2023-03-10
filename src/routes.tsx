import { createBrowserRouter, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/DashboardLayout";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
