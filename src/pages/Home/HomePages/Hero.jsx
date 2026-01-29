 import React from "react";
import {
  heroback,
  icon,
  icon1,
  Mask,
  anplay,
  applay,
  i17,
  i18,
  i19,
} from "../../../assets/images/images";

import Navbar from "../../../components/functionalcom/Navbar";

function Hero() {
  return (
    <main
      style={{ backgroundImage: `url(${heroback})` }}
      className="h-auto w-auto bg-cover bg-center bg-[#0E0E0E] pt-1 px-4 md:px-10 mx-2 md:ml-5 md:mr-5 rounded-[30px] mt-5"
    >
      <Navbar />
      <section className="text-white flex flex-col pb-10">
        
        {/* Top Icon Row: Hidden or scaled on small screens */}
        <div className="flex items-center justify-between mt-10 lg:mt-20 px-4 lg:mx-15">
          <img src={icon} alt="icon" className="w-8 md:w-auto hidden sm:block" />
          <button className="flex gap-2 outline outline-[0.1px] text-[10px] rounded-[10px] w-[150px] py-1 justify-center cursor-pointer mx-auto sm:mx-0">
            <img src={Mask} alt="mask" />
            Next-Gen BNPL Platform
          </button>
          <img src={icon1} alt="icon1" className="w-8 md:w-auto hidden sm:block" />
        </div>

        {/* Main Header: Scaled text for mobile */}
        <header className="text-4xl md:text-6xl lg:text-7xl flex flex-col items-center text-center mt-10 lg:mt-5 px-4 font-medium leading-tight">
          <h1>Shop Now. Pay Later.</h1>
          <h1>Completely Hassle-Free.</h1>
        </header>

        {/* Sub-content with Icons */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 lg:mt-5 px-4 lg:mx-25 gap-6">
          <img src={icon1} alt="iphone" className="hidden lg:block" />
          
          <div className="flex flex-col items-center text-center max-w-[600px]">
            <p className="text-sm md:text-base opacity-80">
              Get instant credit, Shop online or in-store, and repay in flexible
              EMIs—securely and effortlessly.
            </p>
          </div>
          
          <img src={icon} alt="icon" className="hidden lg:block" />
        </div>

        {/* App Store Buttons */}
        <div className="flex flex-wrap gap-4 md:gap-5 items-center justify-center mt-10">
          <button className="cursor-pointer hover:scale-105 transition-transform">
            <img className="h-12 md:h-15" src={applay} alt="App Store" />
          </button>
          <button className="cursor-pointer hover:scale-105 transition-transform">
            <img className="h-12 md:h-15" src={anplay} alt="Play Store" />
          </button>
        </div>

        {/* Hero Devices: Stacked or scaled for mobile */}
        <footer className="flex items-center justify-center mt-10 lg:mt-15 overflow-hidden">
          <img 
            className="mt-8 md:mt-16 w-1/4 max-w-[200px] object-contain" 
            src={i17} 
            alt="iphone-left" 
          />
          <img 
            className="w-1/3 max-w-[280px] z-10 object-contain" 
            src={i18} 
            alt="iphone-center" 
          />
          <img 
            className="mt-8 md:mt-16 w-1/4 max-w-[200px] object-contain" 
            src={i19} 
            alt="iphone-right" 
          />
        </footer>
        
      </section>
    </main>
  );
}

export default Hero;