import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  const [cartNumber, setCartNumber] = useState(0);

  const navItems = [
    {
      id: 1,
      name: "Home",
      route: "/",
    },
    {
      id: 2,
      name: "Mobiles",
      route: "/mobiles",
    },
    {
      id: 3,
      name: "About Us",
      route: "/about-us",
    },
    {
      id: 4,
      name: "Contact Us",
      route: "/contact-us",
    },
  ];

  const updateCartNumber = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartNumber(cart.length);
  };

  useEffect(() => {
    updateCartNumber();

    const handleStorageChange = () => {
      updateCartNumber();
    };

    const handleUpdateCart = () => {
      updateCartNumber();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("updateCart", handleUpdateCart);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("updateCart", handleUpdateCart);
    };
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-300 flex flex-col">
        {/* Navbar */}
        <div className="navbar container">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">
            {/* Navbar Logo */}
            <div className="flex gap-4 items-center cursor-pointer ">
              <Link to={"/"} className="hover:scale-[1.03] transition-all">
                <Logo />
              </Link>
              <SearchBar />
            </div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu font-semibold menu-horizontal">
              {/* Navbar menu content here */}
              {navItems.map((nav) => (
                <li className="mx-1 " key={nav.id}>
                  <NavLink
                    className={
                      "navLink hover:bg-transparent hover:text-[#ef00d3]"
                    }
                    to={nav.route}
                  >
                    {nav.name}
                  </NavLink>
                </li>
              ))}
              <li className="">
                <NavLink
                  className={
                    "navLink hover:bg-transparent hover:text-[#ef00d3]"
                  }
                  to={"/cart"}
                >
                  <CartIcon cartValue={cartNumber} />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* content */}
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay z-50"
        ></label>
        <ul className="menu z-50 w-[70%] sm:w-[40%] font-semibold bg-base-200 min-h-full p-2">
          {/* Sidebar content here */}
          <li>
            <Logo />
          </li>
          {navItems.map((nav) => (
            <li className="z-50 my-1" key={nav.id}>
              <NavLink
                className={"navLink hover:bg-transparent hover:text-[#ef00d3]"}
                to={nav.route}
              >
                {nav.name}
              </NavLink>
            </li>
          ))}
          <li className="">
            <NavLink
              className={"navLink hover:bg-transparent hover:text-[#ef00d3]"}
              to={"/cart"}
            >
              <CartIcon cartValue={cartNumber} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
