 import React from 'react'
import { cheak, con1, con2, con3 } from '../../../assets/contectimg/imgcon'
import { anplay, applay, Mask } from '../../../assets/images/images'

function Contect() {
  return (
    /* flex-col for mobile, lg:flex-row for desktop to keep your layout */
    <section className='flex flex-col lg:flex-row mx-6 md:mx-15 mt-10 lg:mt-25 items-center lg:items-start'>
        
        {/* Left Graphics Side */}
        <div className='flex flex-col items-center relative w-full lg:w-auto'>
            {/* con2: ML only on large screens, absolute positioning for mobile */}
            <button className='cursor-pointer absolute -right-5 lg:ml-78 top-0 z-10'>
              <img src={con2} className="w-40 md:w-60 lg:w-99" alt="" />
            </button>
            
            {/* Main Image: Responsive width */}
            <img src={con1} className='rounded-[10px] w-full max-w-[500px] lg:max-w-none' alt="" />
            
            {/* con3: Scaled for mobile */}
            <button className='absolute bottom-[-15px] left-[-15px] lg:bottom-[-22px] lg:left-[-24px] w-20 lg:w-auto'>
              <img src={con3} alt="" />
            </button>
        </div>

        {/* Right Content Side */}
        {/* ml-25 only on large devices to prevent squishing on tablet */}
        <div className='mt-10 lg:mt-2 lg:ml-25 flex flex-col items-start'>
            <button type="button" className='flex gap-2 border border-gray-300 rounded-[10px] font-medium w-33 justify-center py-1'>
              <img src={Mask} alt="" />For Customer
            </button>
            
            <h1 className='mt-5 text-4xl md:text-5xl font-medium leading-tight'>Shop smarter</h1>
            <h1 className='text-4xl md:text-5xl font-medium leading-tight'>with flexible credit</h1>
            
            {/* Paragraphs: Fixed width replaced with max-w for responsiveness */}
            <div className='mt-6 md:mt-10 text-sm md:text-base max-w-[550px]'>
              <p>Instant approval, transparent EMIs, and complete control over</p>
              <p>every transaction — enjoy a smooth, secure, and stress-free</p>
              <p>shopping experience.</p>
            </div>

            <ul className='flex flex-col gap-4 mt-7'>
                <li className='flex gap-2 text-sm md:text-base'><img src={cheak} alt="" className="h-5 w-5" />Increase customer conversions & basket value</li>  
                <li className='flex gap-2 text-sm md:text-base'><img src={cheak} alt="" className="h-5 w-5" />Accept BNPL for online & in-store purchases</li>
                <li className='flex gap-2 text-sm md:text-base'><img src={cheak} alt="" className="h-5 w-5" />Easy order management & settlements</li>
                <li className='flex gap-2 text-sm md:text-base'><img src={cheak} alt="" className="h-5 w-5" />Powerful dashboard insights</li>
                <li className='flex gap-2 text-sm md:text-base'><img src={cheak} alt="" className="h-5 w-5" />Secure & verified customer transactions</li>
            </ul>

            {/* HR: Responsive width */}
            <hr className='mt-10 text-gray-300 w-full lg:w-[600px]' />
            
            {/* Play buttons: Scaled for mobile */}
            <div className='flex gap-4 md:gap-8 mt-10 lg:mt-15'>
                <button className='hover:scale-105 transition-transform'><img src={anplay} className="h-10 md:h-auto" alt="" /></button>
                <button className='hover:scale-105 transition-transform'><img src={applay} className="h-10 md:h-auto" alt="" /></button>
            </div>
        </div>
    </section>
  )
}

export default Contect