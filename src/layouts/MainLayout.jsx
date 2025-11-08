
import Navbar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx"


import {Outlet} from "react-router-dom"


import '../App.css'

function MainLayout() {
  
  return (
    <div>
    <Navbar />
    <Outlet />
    <Footer />
   </div>
  )
  
}

export default MainLayout;
