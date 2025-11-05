import {Suspense} from "react"
import { RouterProvider } from "react-router-dom";
import mainRouter from "./routes/mainRouter.jsx";

function App() {
  return (
   <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={mainRouter} />
    </Suspense>
  )
}

export default App;