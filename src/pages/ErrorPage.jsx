import {useNavigate} from "react-router-dom";

export default function ErrorPage(){
   const navigate =useNavigate();

   return(
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50 text-center ">
        <h1 className="text-6xl mb-4 font-bold">404</h1>
        <p className="text-lg mb-6">page not found - the page you are looking for does not exists. </p>

        <div className="space-x-3">
             <button 
               type="button"
               onClick={()=> navigate("/")}
               className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500"
             >Go Home
             </button>

             <button
               type="button"
               onClick={()=>navigate(-1)}
               className="px-4 py-2 border rounded hover:bg-gray-100"
             >
               Go Back
             </button>
        </div>

      </div>
   )

}