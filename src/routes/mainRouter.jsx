import {createBrowserRouter} from "react-router-dom";
import {lazy } from "react"
const Home=lazy(()=> import("../pages/Home.jsx"))
const About=lazy(()=>import("../pages/About.jsx"))
const User=lazy(()=>import("../pages/User.jsx"))
const Contact=lazy(()=>import("../pages/Contact.jsx"))
const ErrorPage=lazy(()=>import("../pages/ErrorPage.jsx"))
import MainLayout from "../layouts/MainLayout.jsx"

const mainrouter =createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
       {path:"/" , element:<Home/>},
       {path:"/about" , element:<About/>},
       {path:"/users/:id" , element:<User/>},
       {path:"/contact" , element:<Contact/>},
       {path:"*" , element:<ErrorPage/>} 
     
    ]
  },

])

export default mainrouter;