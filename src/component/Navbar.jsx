import {Link , NavLink , useNavigate , useLocation} from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate();
  const location=useLocation();

  return (
    <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-3 shadow-lg">
      <h1 className="text-2xl font-semibold cursor-pointer" onClick={()=>navigate("/")}>Wanderer Stay</h1>
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
        <button className={location.pathname === "/contact" ? "text-yellow-400" : ""} onClick={()=>navigate("/contact")}>
            contact us
        </button>
       
       <NavLink
         to="/users/1"
         className={({ isActive}) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400" :""}`
        }>
          User1
       </NavLink>

       <NavLink
         to="/users/2"
         className={({ isActive}) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400" :""}`
        }>
          User2
       </NavLink>

      </div>
    </nav>
  );
}