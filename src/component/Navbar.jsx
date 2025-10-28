import {Link , NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-3 shadow-lg">
      <h1 className="text-2xl font-semibold">Wanderer Stay</h1>
      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-yellow-400 ${isActive ? "text-yellow-400" : ""}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}