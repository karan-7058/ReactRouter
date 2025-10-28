import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./pages/About.jsx"
import {createBrowserRouter , RouterProvider} from "react-router-dom";


const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/about" , element:<About/>}
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
