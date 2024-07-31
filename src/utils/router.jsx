import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../pages/MainLayout";
import Error from "../pages/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />
    }
]) 

export default router;