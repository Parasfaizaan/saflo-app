 import React, { useEffect, useState, useRef } from "react";
import { Mask } from "../../../assets/images/images";
import {
  iphone,
  sfolo,
  sfolo1,
  sfolo3,
  sfolo4,
  sfolo5,
} from "../../../assets/screendis/image";

const slides = [sfolo, sfolo1, sfolo5, sfolo3, sfolo4];

function Screendis() {
  const [active, setActive] = useState(slides.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [screenWidth, setScreenWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const timeoutRef = useRef(null);

  // Dynamic width calculation: 260px for desktop, smaller for mobile
  const isMobile = screenWidth < 768;
  const currentSlideWidth = isMobile ? 220 : 260; 
  const currentMargin = 18; 
  const totalSlideSpace = currentSlideWidth + (currentMargin * 2);

  const extendedSlides = [...slides, ...slides, ...slides];

  // Handle Window Resize to update math
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const startAutoPlay = () => {
      timeoutRef.current = setInterval(() => {
        setActive((prev) => prev + 1);
        setIsTransitioning(true);
      }, 3000);
    };
    startAutoPlay();
    return () => clearInterval(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (active === slides.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActive(slides.length);
      }, 600);
    }
    if (active === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setActive(slides.length * 2 - 1);
      }, 600);
    }
  }, [active]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 50);
    }
  }, [isTransitioning]);

  return (
    <section className="flex flex-col items-center mt-10 md:mt-20 w-full overflow-hidden">
      <style>{`
        .slider-track {
          display: flex;
          width: max-content;
          transition: ${isTransitioning ? "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" : "none"};
          /* Uses dynamic totalSlideSpace for perfect centering */
          margin-left: calc(50% - ${totalSlideSpace / 2}px);
        }

        .slide {
          width: ${currentSlideWidth}px;
          margin: 0 ${currentMargin}px;
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .screen {
          width: ${isMobile ? '180px' : '210px'};
          height: ${isMobile ? '370px' : '430px'};
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .screen img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.4s ease;
        }

        .slide.center .screen img {
          transform: scale(1.08);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: #cfcfcf;
          transition: all 0.25s ease-out;
        }

        .dot.active {
          width: 20px;
          background: #000;
        }
      `}</style>

      {/* Badge */}
      <button className="flex gap-2 outline outline-[0.5px] text-[10px] rounded-[10px] w-[150px] justify-center py-1 mb-5">
        <img src={Mask} alt="" />
        Awesome Interface
      </button>

      {/* Headings: Responsive text sizes */}
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-medium">Preview the app through detailed</h1>
        <h1 className="text-3xl md:text-5xl font-medium">Screen displays</h1>
      </div>

      {/* Slider */}
      <div className="relative w-full mt-10 md:mt-20">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${active * totalSlideSpace}px)`,
          }}
        >
          {extendedSlides.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === active ? "center" : ""}`}
            >
              <div className="screen">
                <img src={img} alt="" />
              </div>
            </div>
          ))}
        </div>

        {/* iPhone frame: Responsive height */}
        <img
          src={iphone}
          alt="frame"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none 
          h-[410px] md:h-[480px] w-auto"
        />
      </div>

      {/* Dots */}
      <div className="flex gap-2 mt-10 md:mt-16">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`dot ${active % slides.length === i ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Screendis;