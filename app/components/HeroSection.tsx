"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737079987/PAT_6910_vhrqd7.jpg",
    "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737076317/PAT_6949_bybwob.jpg",
    "https://res.cloudinary.com/dyp8gtllq/image/upload/v1737080283/PAT_6888_wypcnh.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 h-full w-full transition-opacity duration-1000"
          style={{
            opacity: currentSlide === index ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${slide})`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-8 text-4xl font-bold text-yellow-400 md:text-6xl lg:text-7xl">
          Welcome to Divine Love Secondary School!
        </h1>
        <Button
          className="bg-yellow-400 text-black hover:bg-yellow-500"
          size="lg"
        >
          LEARN MORE ABOUT US
        </Button>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? "bg-yellow-400 w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

