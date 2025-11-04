import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./pages/About.jsx"
import Home from "./pages/Home.jsx"
import User from "./pages/User.jsx"
import Contact from "./pages/Contact.jsx"
import ErrorPage from "./pages/ErrorPage.jsx"
import {createBrowserRouter , RouterProvider} from "react-router-dom";


const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
       {path:"/" , element:<Home/>},
       {path:"/about" , element:<About/>},
       {path:"/users/:id" , element:<User/>},
       {path:"/contact" , element:<Contact/>},
       {path:"*" , element:<ErrorPage/>} 
     
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
