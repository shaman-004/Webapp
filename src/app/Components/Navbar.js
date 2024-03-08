import tailwindcss from 'tailwindcss/tailwind.css'
import Login from './Login'
import Image from 'next/image'
import Link from 'next/link'
import { Router } from 'next/router'

const Navbar = () => {
  return (
    <>
    
    <div className='bg-black flex backdrop-blur-xl shadow-lg shadow-gray-700/30   p-7 relative '>
    <div className="flex justify-start lg:container w-20 h-10">
    <Image className='bg-blue-200' src="/logo.jpg" alt="logo" width={50} height={15}></Image>
   <h2 className='text-white bg-red-200 realtive p-2 flex font-bold mr-20'>Sass</h2>
    </div>
    <Link onClick={()=>{
      Router.push('/Components/Home')
    }} href={"./Components/Dashboard"} className='text-white mx-32  '>Contact</Link>
    
    
    <Login/>
    
    </div>
    
    
   

    </>
  )
}

export default Navbar
