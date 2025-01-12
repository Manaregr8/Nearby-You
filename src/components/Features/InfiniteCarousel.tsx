import React from "react";
import "../Features/InfiniteCarousel.css"; // CSS for custom animation

const InfiniteCarousel: React.FC = () => {
  return (
    <div className="slider relative w-full h-[150px] overflow-hidden bg-white dark:bg-[#111928]">
      {/* Left gradient */}
      <div className="absolute inset-y-0 left-0 w-[200px] bg-gradient-to-r from-white dark:from-[#111928] to-transparent z-10"></div>

      {/* Right gradient */}
      <div className="absolute inset-y-0 right-0 w-[200px] bg-gradient-to-l from-white dark:from-[#111928] to-transparent z-10"></div>

      {/* Slider track */}
      <div className="slide-track flex animate-scroll gap-[50px]">
        {Array(3)
          .fill([
            "https://i.ibb.co/C1FpSkv/logo.png",
            "https://i.ibb.co/gD4nV2y/Logo-rentals.webp",
            "https://i.ibb.co/LCGSqNf/Surgi-Kart-01-1-e1683566427671-removebg-preview.png",
            "https://i.ibb.co/nctzWNN/supermedicare.webp",
            "https://i.ibb.co/5vBxgp5/RK-High-Res-Logo-2-removebg-preview.webp",

          ])
          .flat()
          .map((src, index) => (
            <div
              key={index}
              className="slide flex-shrink-0 w-[300px] h-[150px] flex items-center justify-center"
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-[90px] object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
