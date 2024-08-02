import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Link } from "react-router-dom";

export default function Navbar() {
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
      route: "/about",
    },
    {
      id: 4,
      name: "Contact",
      route: "/contact",
    },
  ];

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content bg-base-300 flex flex-col">
        {/* Navbar */}
        <div className="navbar  container">
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
            <div className="hover:scale-105 cursor-pointer transition-all">
              <Link to={"/"}>
                <Logo />
              </Link>
            </div>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu font-semibold menu-horizontal">
              {/* Navbar menu content here */}
              {navItems.map((nav, idx) => (
                <li className="mx-1" key={idx}>
                  <NavLink className={"navLink"} to={nav?.route}>
                    {nav?.name}
                  </NavLink>
                </li>
              ))}
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
        <ul className="menu z-50 w-[60%] sm:w-[40%] font-semibold bg-base-200 min-h-full p-2">
          {/* Sidebar content here */}
          <li>
            <Logo />
          </li>
          {navItems.map((nav, idx) => (
            <li className="z-50 my-1" key={idx}>
              <NavLink className={"navLink"} to={nav?.route}>
                {nav?.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
