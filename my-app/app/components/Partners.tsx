'use client'
import React, { useState, useEffect } from 'react';

export default function PartnersSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const partners = [
    {
      id: 1,
      name: 'Cobus Industries',
      logo: 'COBUS',
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      url: "https://www.cobus-industries.com",
    },
    {
      id: 2,
      name: 'TLD Group',
      logo: 'TLD',
      bgColor: 'bg-white',
      textColor: 'text-[#0099CC]',
      isLarge: true,
      url: "https://www.tld-group.com/"
    },
    {
      id: 3,
      name: 'Resqtec',
      logo: 'RESQTEC',
      bgColor: 'bg-white',
      textColor: 'text-gray-900',
      hasGreen: true,
      url: "https://resqtec.com/"
    },
    {
      id: 4,
      name: 'BK Technologies',
      logo: 'BK',
      bgColor: 'bg-gradient-to-br from-[#562718] to-pink-600',
      textColor: 'text-white',
      isDark: true,
      url: "https://www.bktechnologies.com/"
    }
  ];

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % partners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, partners.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="w-full py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-[#0a1f44] mb-16 animate-fade-in">
          Our Partners
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`relative group cursor-pointer transition-all duration-500 ${currentIndex === index ? 'scale-105 z-10' : 'scale-100'
                }`}
              onClick={() => {
                goToSlide(index);
                if (partner.url) {
                  window.open(partner.url, "_blank", "noopener,noreferrer");
                }
              }}

            >
              <div className={`
                ${partner.bgColor} 
                rounded-2xl shadow-lg p-8 h-64 flex flex-col items-center justify-center
                transition-all duration-500 ease-out
                hover:shadow-2xl hover:scale-105
                ${currentIndex === index ? 'ring-4 ring-[#562718] ring-opacity-50' : ''}
              `}>
                <div className="flex-1 flex items-center justify-center mb-6">
                  {partner.id === 1 && (
                    <div className={`${partner.textColor} text-4xl font-bold flex items-center gap-2`}>
                      <span>COBUS</span>
                      <div className="w-3 h-3 bg-[#562718] rounded-sm"></div>
                    </div>
                  )}

                  {partner.id === 2 && (
                    <div className={`${partner.textColor} text-7xl font-black tracking-tighter`}>
                      TLD
                    </div>
                  )}

                  {partner.id === 3 && (
                    <div className="text-4xl font-bold flex items-center">
                      <span className="text-gray-900">RES</span>
                      <span className="text-green-500">Q</span>
                      <span className="text-gray-900">TEC</span>
                      <span className="text-gray-400 text-2xl">®</span>
                    </div>
                  )}

                  {partner.id === 4 && (
                    <div className={`${partner.textColor} text-center`}>
                      <div className="text-6xl font-black mb-2">BK</div>
                      <div className="text-sm font-semibold tracking-widest">TECHNOLOGIES</div>
                    </div>
                  )}
                </div>

                <div className={`
                  ${partner.isDark ? 'text-white' : 'text-gray-700'}
                  text-center font-semibold text-lg
                  transform transition-all duration-300
                  ${currentIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}
                `}>
                  {partner.name}
                </div>

                <div className={`
                  absolute inset-0 rounded-2xl transition-opacity duration-300
                  ${partner.isDark ? 'bg-[#763721]' : 'bg-[#984428]'}
                  opacity-0 group-hover:opacity-10
                `}></div>
              </div>

              {currentIndex === index && (
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#d64b1d] rounded-full animate-pulse"></div>
              )}
            </div>
          ))}
        </div>



        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#6e3d2c] rounded-full opacity-20 animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#6f3623] rounded-full opacity-20 animate-float-delayed"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}