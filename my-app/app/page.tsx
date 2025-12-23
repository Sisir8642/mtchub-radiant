'use client'
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { Product } from "@/types/products";
import ProductSlider from "./components/ProductSlider";
import Partners from "./components/Partners";
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/image3.jpg",
    "/images/image.png",
    "/images/image4.png",
    "/images/image5.png",
    "/images/image7.png",


  ];

  interface ProductCard {
    product: Product;
    onClick: () => void;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div>
      <section className="relative w-full h-[92vh] overflow-hidden ">
        
        <div className="absolute inset-0 flex items-center justify-center mb-40">
          <div className="relative w-full h-screen mt-30 overflow-hidden">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentIndex
                    ? "translate-x-0"
                    : index === (currentIndex - 1 + images.length) % images.length
                      ? "-translate-x-full"
                      : "translate-x-full"
                  }`}
              >
                <img
                  src={src}
                  alt={`Product ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}

          </div>
        </div>

        <div className="absolute inset-0 bg-black/30 z-5"></div>

        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-4 pb-24 mt-4">
          <h2 className="text-5xl font-bold mb-2 text-white">
            Trusted Supplier of Military, Aviation & Telecom Equipment
          </h2>
          <p className="text-xl mb-4 text-orange-200 font-semibold">
            Serving Nepal Army, Airports, NEA, Telecom & Government Entities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-[#6f2e18] px-8 py-3 rounded-lg font-semibold hover:cursor-pointer hover:bg-[#e2d4d4] transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#833b23] transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-white w-8" : "bg-white/50"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      <section id="slider">
        <ProductSlider />
      </section>
      <section>
        <Partners />
      </section>
    </div>
  );
}
