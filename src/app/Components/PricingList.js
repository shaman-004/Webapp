import React from 'react'

const PricingList =() => {
  return  (
    <div className='text-white grid text-center m-8 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'> 
        <div className=' bg-black h-64 max-w-64  rounded-lg p-6 border-2 hover:border-gray-700  hover:skew-y-6  sm:h-48 md:h-64'>
            <h1 className='mb-4'>Standard</h1>
            <p className='py-8'>Get simple features</p>
        </div>
        <div className=' bg-black h-64 max-w-64 rounded-lg p-6 border-2 hover:border-gray-700 hover:skew-y-6 sm:h-48 md:h-64'>
            <h1 className='mb-4'>Pro</h1>
            <p className='py-8'>Get pro features in your website</p>
        </div>
        <div className=' bg-black h-64 max-w-64  rounded-lg p-6 border-2 hover:border-gray-700 hover:skew-y-6 sm:h-48 md:h-64'>
            <h1 className='mb-4'>Enterprise</h1>
            <p className='py-8'>Get enterprise level feature</p>
        </div>
    </div>
  )
}

export default PricingList;
  
  