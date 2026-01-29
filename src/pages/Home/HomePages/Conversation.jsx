 import React from 'react'
import { cheak } from '../../../assets/contectimg/imgcon'
import { anplay, applay, Mask } from '../../../assets/images/images'
import { conver } from '../../../assets/imgpaycon/imgpay'

function Conversation() {
  return (
    /* flex-col for mobile, lg:flex-row for desktop. 
       Changed mt-30 to responsive mt-10 md:mt-30 */
    <section className='flex flex-col lg:flex-row items-center lg:items-start mt-10 md:mt-30 px-6 md:px-15'>
        
        {/* Text Content Side */}
        <div className='w-full lg:ml-25 lg:mt-2 flex flex-col items-start'>
            <button type="button" className='flex gap-2 border border-gray-300 rounded-[10px] font-medium w-33 justify-center py-1'>
              <img src={Mask} alt="" />For Merchant
            </button>
            
            <h1 className='mt-5 text-4xl md:text-5xl font-medium leading-tight'>Boost Conversation with</h1>
            <h1 className='text-4xl md:text-5xl font-medium leading-tight'>effortless BNPL acceptance</h1>
            
            <div className='mt-6 md:mt-10 text-gray-600 max-w-[600px]'>
                <p>Enable customers to buy now and pay later, increase basket value,</p>
                <p>streamline settlements, and manage everything through a </p>
                <p>powerful merchant dashboard.</p>
            </div>

            <ul className='flex flex-col gap-4 mt-7'>
                <li className='flex gap-3 text-sm md:text-base'><img src={cheak} alt="check" className='h-5 w-5' />Increase conversions & average order value</li>  
                <li className='flex gap-3 text-sm md:text-base'><img src={cheak} alt="check" className='h-5 w-5' />Accept BNPL online and in-store</li>
                <li className='flex gap-3 text-sm md:text-base'><img src={cheak} alt="check" className='h-5 w-5' />Easy order management & fast settlements</li>
                <li className='flex gap-3 text-sm md:text-base'><img src={cheak} alt="check" className='h-5 w-5' />Insightful merchant dashboard</li>
                <li className='flex gap-3 text-sm md:text-base'><img src={cheak} alt="check" className='h-5 w-5' />Secure & verified customer transactions</li>
            </ul>

            {/* hr: Changed fixed 600px to w-full with max-w */}
            <hr className='mt-10 text-gray-300 w-full max-w-[600px]' />
            
            <div className='flex flex-wrap gap-4 md:gap-8 mt-10 lg:mt-15'>
                <button className='hover:scale-105 transition-transform'><img src={anplay} className="h-12 md:h-auto" alt="" /></button>
                <button className='hover:scale-105 transition-transform'><img src={applay} className="h-12 md:h-auto" alt="" /></button>
            </div>
        </div> 

        {/* Image Side */}
        <div className='w-full lg:w-auto mt-10 lg:mt-0 flex justify-center'>
            {/* Replaced fixed w-190 h-160 with responsive classes to prevent overflow */}
            <img 
              src={conver} 
              className='w-full max-w-[400px] md:max-w-[600px] lg:max-w-[760px] h-auto object-contain' 
              alt="Merchant Illustration" 
            />
        </div>
    
    </section>
  )
}

export default Conversation