'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/singapore2.jpeg",
    "/images/singapore3.jpeg",
    "/images/singapore4.jpeg",
    "/images/singapore5.jpeg",
    "/images/singapore6.jpeg",
    "/images/singapore1.jpeg",
    "/images/singapore7.jpeg",
    "/images/singapore8.jpeg",
    "/images/singapore9.jpeg",


];

export default function HeroSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (<>
        <div className="flex text-center justify-center mt-5">
            <h3 className="font-bold text-gray-500 text-5xl">Singapore Tour 2024</h3>
        </div>
        <div className="relative w-full h-[70vh] overflow-hidden rounded-lg mt-8">
            <AnimatePresence>
                <motion.img
                    key={current}
                    src={images[current]}
                    alt="Slider Image"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            
        </div>
      
    </>
    );
}
