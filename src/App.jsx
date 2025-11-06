import { RouterProvider } from "react-router-dom"
import {Suspense} from "react"
import mainRouter from "./routes/mainRouter.jsx"

export default function App(){
    return(
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={mainRouter}/>
        </Suspense>
       
    )
}