import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Mobiles from "../pages/Mobiles/Mobiles";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/Contact/Contact";

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
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
