'use client'
import Navbar from "./Components/Navbar"; // Import the Navbar component
import Image from 'next/image'
import Link from 'next/link'
const { colors, fontFamily } = require('tailwindcss/defaultConfig')
import { Suspense } from 'react'
import LoadingFallback from "./Components/LoadingFallback"; 
import FeatureList from "./Components/FeatureList"; 
import PricingList from "./Components/PricingList";
import Dashboard  from "../app/Components/Dashboard/page"; // Import the Dashboard component
import loading from './Components/loading'
import { useState, useEffect } from 'react';
export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    
    <>
    
    <Navbar/>
    
    <div className="mx-auto max-w-2xl m-20">
      <div className="text-center">
        <div className="max-w-2xl">
          <div className="text-14xl sm:leading-[3.2rem] gap-10 sm:text-5xl font-semibold">
            <h1 className="h1">An Open Source Linktree Substitute</h1>
          </div>
            <div className="mt-3 md:text-lg md:leading-8 leading-6 text-14xl">
              <p className="p1">Build your awesome avatar and easily share it with your connections for free! Create a standout in the crowd that reflects your uniqueness.</p>
            </div>
              <div className="mt-5 flex items-center justify-center gap-x-6">
                <div className="opacity: 1; transform: none;">
                  <button className="button1 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-#861657 font-bold shadow-sm text-secondary md:hover:scale-[102%] transition-all duration-200 h-10 px-4 py-2">Get Started &rarr; </button>
                  
                </div>
              </div>
        </div>
      </div>
    </div>

    
    <center>
      <div  className="animate-bounce h-8 w-8 rounded-xl bg-red-300 ">
            <img src="arrow.png" alt="" />
      </div>
    </center>
    

    <div className="p-10">
      
        <div className="mx-auto max-w-2xl m-20">
          <div className="text-center">
            <div className="max-w-2xl">
              <div className="  text-14xl sm:leading-[3.2rem] gap-10 sm:text-5xl font-semibold">
                <h1 className="h1">Features</h1>
              </div>
                <div className="mt-3 md:text-lg md:leading-8 leading-6 text-14xl">
                  <p className="p1">Build your awesome avatar and easily share it with your connections for free! Create a standout in the crowd that reflects your uniqueness.</p>
                </div>
            </div>
          </div>
        </div>
        

          <Suspense fallback={<LoadingFallback/>}>
              <FeatureList />
          </Suspense>
      
    </div>

    <div className="p-20">
      
        <div className="mx-auto max-w-2xl m-20">
          <div className="text-center">
            <div className="max-w-2xl">
              <div className="text-white text-14xl sm:leading-[3.2rem] gap-10 sm:text-5xl font-semibold">
                <h1 className="h1">Pricing</h1>
              </div>
                <div className="mt-3 md:text-lg md:leading-8 leading-6 text-14xl">
                  <p className="p1">Build your awesome avatar and easily share it with your connections for free! Create a standout in the crowd that reflects your uniqueness.</p>
                </div>
                

            </div>
          </div>
        </div>
      
  
    <Suspense fallback={<LoadingFallback/>}>
              <PricingList/>
          </Suspense>
    </div>
    <div className="p-20 bg-gray-900 text-center items-center sm:m">
      <Dashboard/>
    </div>
   

  


    
     
    </>
  );
}
