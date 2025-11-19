
import Navbar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx"
import { ThemeContext } from "../context/ThemeContext.jsx"
import {useContext} from "react"


import {Outlet} from "react-router-dom"


import '../App.css'

function MainLayout() {
  const {theme} =useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "bg-white text-black " : "bg-black text-white"}>
      
        <Navbar />
        <Outlet />
        <Footer />
      
    </div>
  )
  
}

export default MainLayout;
