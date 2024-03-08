

import Link from "next/link"

const Login = () => {    
  return (
    <>
 <div className="flex justify-end absolute inset-x-10  top-7 items-center">
   
    <Link  href="/Login"  className="button  hover:bg-gray-700 text-black  font-medium py-1 px-5 rounded-md md:hover:scale-[102%] transition-all duration-200 ">
      Log in 
      </Link>
      
 </div>
    </>
  )
  }
export default Login
