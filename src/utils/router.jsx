import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../pages/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: async() => await fetch("./phones.json")
            }
        ]
    }
]) 

export default router;