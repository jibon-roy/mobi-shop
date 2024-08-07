import { Link } from "react-router-dom";
import useUserActions from "../utils/hooks/useUserActions";

export default function UserDropdown() {
  const { user, logOut } = useUserActions();
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={
              user?.photoURL
                ? user.photoURL
                : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li>
          <Link>Settings</Link>
        </li>
        <li>
          <span onClick={logOut}>Logout</span>
        </li>
      </ul>
    </div>
  );
}
