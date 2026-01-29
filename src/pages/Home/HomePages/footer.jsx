 import React from 'react'
import { anplay, applay, heroback, logo } from '../../../assets/images/images'
import { call, email, loc } from '../../../assets/footer/footer'

function Footer() {
  return (
    /* 1. Changed min-h-screen to h-auto so it only takes the space it needs on mobile.
       2. Reduced mt-20 to mt-10 for mobile.
    */
    <footer className='h-auto bg-black mt-10 md:mt-20 mx-2 md:mx-5 rounded-[20px] pb-6 bg-cover bg-center' style={{backgroundImage:`url(${heroback})`}}>
        
        {/* Top CTA Section: Reduced padding and gap for mobile */}
        <section className='flex flex-col lg:flex-row pt-12 lg:pt-20 justify-around items-center gap-8 lg:gap-80 px-6 text-center lg:text-left'>
          <div className='text-white '>
            <h1 className='text-3xl md:text-5xl font-medium leading-tight'>Download the app today!</h1>
            <p className='mt-3 md:mt-5 max-w-[500px] text-gray-400 text-sm md:text-base'>
              Download the app today to enjoy seamless performance and smart features.
            </p>
          </div>
          <div className='flex gap-4'>
            <button className='hover:scale-105 transition-transform'><img src={applay} alt="" className="h-10 md:h-auto" /></button>
            <button className='hover:scale-105 transition-transform'><img src={anplay} alt="" className="h-10 md:h-auto" /></button>
          </div>
        </section> 

        <hr className='border-gray-800 mt-10 lg:mt-20' />

        {/* Links Grid Section: Using a tighter gap on mobile */}
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-around mt-10 lg:mt-16 px-8 lg:px-0 gap-8 lg:gap-0'>
          
          {/* Logo and About */}
          <div className='text-white max-w-[300px]'>
            <img src={logo} alt="Logo" className="w-32 md:w-auto" />
            <p className='mt-4 text-gray-400 text-sm leading-relaxed'>
              Empowering your digital journey with user-friendly solutions designed for a smarter life.
            </p>
          </div>
             
          {/* Quick Links */}
          <div>
             <ul className='text-white flex flex-col gap-2 md:gap-3'>
              <li><h1 className='font-medium text-xl md:text-2xl mb-1 md:mb-2'>Quick Links</h1></li>
              {['Home', 'About Us', 'Feature', 'Blog', 'Contact Us'].map((item) => (
                <li key={item} className='text-gray-400 text-sm hover:text-white cursor-pointer transition-colors'>{item}</li>
              ))}
             </ul>
          </div >

          {/* Support */}
          <div>
             <ul className='text-white flex flex-col gap-2 md:gap-3'>
              <li><h1 className='font-medium text-xl md:text-2xl mb-1 md:mb-2'>Support</h1></li>
              {['Help Center', 'FAQs', 'Terms', 'Privacy Policy'].map((item) => (
                <li key={item} className='text-gray-400 text-sm hover:text-white cursor-pointer transition-colors'>{item}</li>
              ))}
             </ul>  
          </div>
             
          {/* Contact Info */}
          <div>
             <ul className='text-white flex flex-col gap-4 md:gap-5'>
              <li><h1 className='font-medium text-xl md:text-2xl'>Get In Touch</h1></li>
              <li className='flex gap-3 text-gray-400 text-sm'><img src={loc} alt="" className="h-5 w-5" />123 Innovation St, Tech, USA</li>
              <li className='flex gap-3 text-gray-400 text-sm'><img src={call} alt="" className="h-5 w-5" />+1 (123) 456-789</li>
              <li className='flex gap-3 text-gray-400 text-sm'><img src={email} alt="" className="h-5 w-5" />tanya.hill@example.com</li>
             </ul>
          </div>
        </section>

        <hr className='border-gray-800 mt-10 lg:mt-20' />

        {/* Bottom Copyright Section: Compact for mobile */}
        <section className='text-white flex flex-col md:flex-row justify-between items-center mx-6 lg:mx-10 py-6 gap-4 text-center md:text-left'>
          <h1 className='text-xs md:text-sm text-gray-500'>Copyright © 2025 All Rights Reserved.</h1>
          <ul className='flex flex-wrap justify-center gap-3 text-xs md:text-sm text-gray-400'>
              <li className='hover:text-green-400 cursor-pointer'>Facebook</li>
              <li className='hover:text-green-400 cursor-pointer'>Twitter</li>
              <li className='hover:text-green-400 cursor-pointer'>Instagram</li>
              <li className='hover:text-green-400 cursor-pointer'>Linkedin</li>
          </ul>
        </section>
    </footer>
  )
}

export default Footer;