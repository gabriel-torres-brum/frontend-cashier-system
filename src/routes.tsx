import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"
import { NotFound } from "./pages/NotFound"

export const routes = createBrowserRouter([
    {
        path: "*",
        element: <NotFound />
    },
    {
        path: "/",
        element: <Dashboard />,
    },
])