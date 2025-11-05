
import Navbar from "../component/Navbar.jsx"


import {Outlet} from "react-router-dom"


import '../App.css'

function MainLayout() {
  
  return (
    <div>
    <Navbar />
    <Outlet />
   </div>
  )
  
}

export default MainLayout;
