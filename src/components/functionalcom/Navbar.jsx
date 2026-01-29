 import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logo, arrow } from "../../assets/images/images";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="px-4">
      {/* Main Nav Container
        max-w-[1460px]: Desktop constraint
        h-[80px] lg:h-[100px]: Shorter on mobile 
      */}
      <nav className=" border flex justify-between items-center bg-black text-white h-[80px] lg:h-[100px] max-w-[1460px] mx-auto px-6 lg:px-10 rounded-[20px] mt-[20px] lg:mt-[50px] relative z-50 transition-all duration-300">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img className="w-[100px] lg:w-auto" src={logo} alt="Logo" />
        </Link>

        {/* Desktop Links (Hidden on mobile/tablet < 1024px) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-12">
          <li>
            <Link to="/" className="flex items-center hover:text-green-400 text-white transition-colors">
              Home <RiArrowDropDownLine className="text-3xl" />
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-green-400 transition-colors">About Us</Link>
          </li>
          <li>
            <Link to="/feature" className="hover:text-green-400 transition-colors">Features</Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-green-400 transition-colors">Blog</Link>
          </li>
          <li>
            <Link className="flex items-center hover:text-green-400 transition-colors" to="/page">
              Pages <RiArrowDropDownLine className="text-3xl" />
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="hover:text-green-400 transition-colors whitespace-nowrap">Contact Us</Link>
          </li>
        </ul>

        {/* Action Button (Hidden on mobile/tablet) */}
        <Link 
          className="hidden lg:flex border cursor-pointer text-black bg-[#B9FB6A] h-[50px] w-[200px] xl:w-[217px] rounded-[10px] items-center justify-center hover:scale-105 transition-transform" 
          to="/"
        >
          <span className="font-semibold text-sm xl:text-base">Download The App</span>
          <img className="ml-2 w-4" src={arrow} alt="arrowicon" />
        </Link>

        {/* Hamburger Icon (Only visible on mobile/tablet) */}
        <div onClick={handleNav} className="lg:hidden cursor-pointer text-3xl">
          {nav ? <RiCloseLine /> : <RiMenu3Line />}
        </div>

        {/* Mobile Sidebar Overlay */}
        <div
          className={`
            lg:hidden fixed left-0 top-0 w-full h-screen bg-black/95 z-[-1] transition-all duration-500 ease-in-out px-8 pt-24
            ${nav ? "left-0 opacity-100" : "left-[-100%] opacity-0"}
          `}
        >
          <ul className="flex flex-col gap-6 text-xl">
            <li className="border-b border-white/10 pb-4">
              <Link onClick={() => setNav(false)} to="/" className="flex justify-between items-center">
                Home <RiArrowDropDownLine className="text-3xl" />
              </Link>
            </li>
            <li className="border-b border-white/10 pb-4">
              <Link onClick={() => setNav(false)} to="/about">About Us</Link>
            </li>
            <li className="border-b border-white/10 pb-4">
              <Link onClick={() => setNav(false)} to="/feature">Features</Link>
            </li>
            <li className="border-b border-white/10 pb-4">
              <Link onClick={() => setNav(false)} to="/blog">Blog</Link>
            </li>
            <li className="border-b border-white/10 pb-4">
              <Link onClick={() => setNav(false)} to="/page" className="flex justify-between items-center">
                Pages <RiArrowDropDownLine className="text-3xl" />
              </Link>
            </li>
            <li className="pb-4">
              <Link onClick={() => setNav(false)} to="/contact-us">Contact Us</Link>
            </li>
            
            <Link 
              className="mt-4 flex border cursor-pointer text-black bg-[#B9FB6A] h-14 w-full rounded-[10px] items-center justify-center" 
              to="/"
              onClick={() => setNav(false)}
            >
              <span className="font-bold">Download The App</span>
              <img className="ml-2" src={arrow} alt="arrowicon" />
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;