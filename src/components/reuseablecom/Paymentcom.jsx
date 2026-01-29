import React from 'react'

function Paymentcon({text,image,paragraph,paragraph1}) {
  return (
    <div className='w-80 h-auto flex flex-col gap-5  mt-15 px-10 mx-10 bg-white py-10 rounded-[10px] mb-20'>
      <img className='w-15' src={image} alt="" />
      <h1 className='font-medium text-[18px] '>{text}</h1>
      <div className='text-[14px]'>
          <p>{paragraph}</p>
      <p>{paragraph1}</p> 
      </div>
   
    </div>
  )
}

export default Paymentcon
