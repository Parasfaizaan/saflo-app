 import React from 'react'
import { Mask } from '../../../assets/images/images'
import Paymentcom from '../../../components/reuseablecom/Paymentcom'
import { img1,img2,img3,img4 } from '../../../assets/imgpaycon/imgpay'

function Payment() {
  return (
    <section className='bg-gray-200 h-auto mt-10 md:mt-23 mx-2 md:mx-5 rounded-[30px] pb-16 overflow-hidden '>
        
        {/* Header Section */}
        <div className='px-6 md:px-10 pt-12 md:pt-23 flex flex-col items-center md:items-start text-center md:text-left'>
            <button className='flex border border-gray-400 items-center w-32 justify-center rounded-[10px] py-1 text-[10px] font-medium bg-white/50'>
                <img src={Mask} alt="" className="mr-1" /> Core Features
            </button>
            <h1 className='text-3xl md:text-5xl font-medium mt-3 leading-tight'>
                Everything you need for <br className="hidden md:block" /> smarter payments
            </h1>
        </div>

        {/* THE FIX: 
           1. Use 'w-full' and 'max-w' to prevent the grid from exploding.
           2. 'justify-items-center' ensures cards stay in the middle on mobile.
        */}
        <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2  lg:grid-cols-4 gap-6 px-4 md:px-10 mt-10 justify-items-center'>
            <div className="w-full max-w-[350px] lg:max-w-none">
                <Paymentcom image={img1} text={"Instant Credit Approval"} paragraph1={"instant usable credit"} paragraph={"Complete quick KYC and get "} />
            </div>
            <div className="w-full max-w-[350px] lg:max-w-none">
                <Paymentcom image={img2} text={"Shop Anywhere"} paragraph1={"partnered physical stores."} paragraph={"Use your BNPL credit online or at "} />
            </div>
            <div className="w-full max-w-[350px] lg:max-w-none">
                <Paymentcom image={img3} text={"Flexible EMI Payments"} paragraph1={"that fit your budget"} paragraph={"Choose repayment plans"} />
            </div>
            <div className="w-full max-w-[350px] lg:max-w-none">
                <Paymentcom image={img4} text={"Secure Virtual Card"} paragraph1={"generated BNPL virtual card."} paragraph={"Pay safely with an auto-"} />
            </div>
        </div>
    </section>
  )
}

export default Payment