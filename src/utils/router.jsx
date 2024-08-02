import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Mobiles from "../pages/Mobiles/Mobiles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => await fetch("./phones.json"),
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
        loader: async () => await fetch("./phones.json"),
      },
      {
        path: "/about-us",
        element: <Mobiles />,
        loader: async () => await fetch("./phones.json"),
      },
    ],
  },
]);

export default router;
