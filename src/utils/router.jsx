import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home/Home";
import Mobiles from "../pages/Mobiles/Mobiles";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/Contact/Contact";
import MobileDetails from "../pages/MobileDetails/MobileDetails";
import Cart from "../pages/Cart/Cart";

const localItems = localStorage.getItem("cartItems");
const localItemsJson = JSON.parse(localItems);
// console.log(localItemsJson);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const data = await fetch("/phones.json");
          return (await data.json()) || null;
        },
      },
      {
        path: "/mobiles",
        element: <Mobiles />,
        loader: async () => {
          const data = await fetch("/phones.json");
          return (await data.json()) || null;
        },
      },
      {
        path: "/mobiles/:id",
        element: <MobileDetails />,
        loader: async ({ params }) => {
          const data = await fetch("/phones.json");
          const mobiles = await data.json();
          return mobiles.find((a) => a.id == params.id) || null;
        },
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: async () => {
          const data = await fetch("/phones.json");
          const mobiles = await data.json();
          return localItemsJson
            ? mobiles.filter((mobile) =>
                localItemsJson.some((item) => item.id === mobile.id)
              )
            : null;
        },
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
