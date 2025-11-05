import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {lazy , Suspense} from "react"
import './index.css'
import App from './App.jsx'
const Home=lazy(()=> import("./pages/Home.jsx"))
const About=lazy(()=>import("./pages/About.jsx"))
const User=lazy(()=>import("./pages/User.jsx"))
const Contact=lazy(()=>import("./pages/Contact.jsx"))
const ErrorPage=lazy(()=>import("./pages/ErrorPage.jsx"))
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
 

    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>

  
)
