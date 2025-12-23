'use client';
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-white shadow-md sticky top-0 z-50 ${showNavbar ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">

        <div className="flex justify-between items-center py-4">

          <div className="flex items-center gap-3">
            <Link href="/">
              <Image
                src="/images/logomtc.png"
                alt="Passion Logo"
                height={112}
                width={200}
                className="h-17 w-auto" />

            </Link>
          </div>

          <div className="flex items-center gap-6">

            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#7644a2] hover:border-2 hover:rounded-2xl hover:border-yellow-400">HOME</Link>
              <Link href="/about" className="text-gray-700 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#7644a2] hover:border-2 hover:rounded-2xl hover:border-yellow-400">ABOUT US</Link>
              <Link href="/products" className="text-gray-700 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#7644a2] hover:border-2 hover:rounded-2xl hover:border-yellow-400">IMPORTS/PRODUCTS</Link>

              <div className="relative group">
                <button
                  className="text-gray-700 font-medium px-3 py-1 rounded-2xl border-2 border-transparent transition-all duration-300
             hover:text-[#7644a2] hover:border-yellow-400 cursor-pointer"
                >
                  AIRSHOW EXPO/EXHIBITION
                </button>

                <div className="absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
                  <Link
                    href="/singapore"
                    className="block w-full text-left px-3 py-1 rounded-2xl border-2 border-transparent text-gray-700 font-medium
             transition-all duration-300 hover:text-[#7644a2] hover:border-yellow-400"
                  >
                    Singapore 2024
                  </Link>

                  <Link
                    href="/dubai"
                    className="block w-full text-left px-3 py-1 rounded-2xl border-2 border-transparent text-gray-700 font-medium
             transition-all duration-300 hover:text-[#7644a2] hover:border-yellow-400"
                  >
                    Dubai 2023
                  </Link>


                </div>
              </div>



              {/* <Link href="/exhibition" className="text-gray-700 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#7644a2] hover:border-2 hover:rounded-2xl hover:border-yellow-400">AIRSHOW EXPO/EXHIBITION</Link> */}

              <Link href="/gallery" className="text-gray-700 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#1C1E21] hover:border-2 hover:rounded-2xl hover:border-yellow-400">GALLERY</Link>
              <Link href="/contact" className="text-gray-700 font-medium px-3 py-1 rounded transition-all duration-300 
             hover:text-[#1C1E21] hover:border-2 hover:rounded-2xl hover:border-yellow-400">CONTACT US</Link>
            </nav>


            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <nav className="px-4 py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-pink-600 font-medium">Home</Link>
            <Link href="/products" className="block text-gray-700 hover:text-pink-600 font-medium">Products</Link>
            <Link href="/about" className="block text-gray-700 hover:text-pink-600 font-medium">About Us</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-pink-600 font-medium">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
