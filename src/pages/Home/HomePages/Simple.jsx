import React from 'react'
import { no1, no2, no3, no4, sim, sim1 } from '../../../assets/simple/simple'
import { Mask } from '../../../assets/images/images'

function Simple() {
  return (
    <section className='mt-30 flex justify-around gap-20'>
        <div>
            <button className="flex gap-2 outline outline-[0.1px] text-[13px] rounded-[10px] font-medium w-[110px] justify-center cursor-pointer">
                  <img src={Mask} alt="playstore" />
                  How it works
                </button>
                <h1 className='text-5xl font-medium mt-7'>Simple,transparent</h1>
                <h1 className='text-5xl font-medium'>and effortless</h1>
<ul className='mt-13 flex flex-col gap-10'>
  <li className='flex'>
    <img src={no1} alt="Description of image"/>
    <div className='flex flex-col gap-2 ml-5'>
         <h1 className='font-medium'>Sign Up & Complete KYC</h1>
    <p className='text-gray-500'> Get verified with a secure onboarding process.</p>
    </div>
   
  </li>
 
  <li className='flex'>
    <img src={no2} alt="Description of image"/>
    <div className='flex flex-col gap-2 ml-5'> <h1 className='font-medium'>Get Your Credit Limit</h1>
    <p className='text-gray-500'>System assigns credit based on verification & eligibility.</p></div>
   
  </li>
   <li className='flex'>
    <img src={no3} alt="Description of image"/>
    <div className='flex flex-col gap-2 ml-5'> <h1 className='font-bold'> Shop Online or In-Store</h1>
    <p className='text-gray-500'> Use your virtual BNPL card or shop with partnered merchants.</p>
    </div>
   
  </li>
   <li className='flex'>
    <img src={no4} alt="Description of image"/>
    <div className='flex flex-col gap-2 ml-5'>
        <h1 className='font-bold'>Repay in Easy EMIs</h1>
    <p className='text-gray-500'>Choose flexible plans and stay updated via reminders.</p> 
    </div>
   
  </li>

</ul>
        </div>
        <div className='flex'>
            <img className='h-[600px]' src={sim} alt="" />
            <img className='h-[600px]' src={sim1} alt="" />

        </div>
               
    </section>
  )
}

export default Simple
