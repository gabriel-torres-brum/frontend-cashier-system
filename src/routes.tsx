import { createBrowserRouter } from "react-router-dom"
import { DashboardLayout } from "./components/DashboardLayout"
import { Dashboard } from "./pages/Dashboard"
import { NotFound } from "./pages/NotFound"

export const routes = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />,
    },
    {
        element: <DashboardLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            }
        ]
    },
])