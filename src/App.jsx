import { useState } from 'react'
import Navbar from "./component/Navbar.jsx"


import {Outlet} from "react-router-dom"


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Outlet />
   </div>
  )
  
}

export default App
