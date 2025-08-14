 "use client"
import logo from "../assets/logo.png"; // adjust the path according to your file structure
import Goldlogo from "../assets/Goldlogo.png"; // adjust the path according to your file structure
import abcd from "../assets/abcd.png"; // adjust the path according to your file structure
import abc from "../assets/abc.png"; // adjust the path according to your file structure
import { useState } from "react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

return (
  <nav className="bg-[#3A3960] text-[#FAFFC5] fixed w-full z-50 shadow-lg">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={Goldlogo} // Use Goldlogo for the main logo
            alt="Swastik Logo"
            className="h-45 w-auto cursor-pointer"
            onClick={() => scrollToSection("home")} // Optional: scroll to top/home on click
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:bg-[#5E686D] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:bg-[#5E686D] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:bg-[#5E686D] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="hover:bg-[#5E686D] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:bg-[#5E686D] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-[#5E686D] transition-all duration-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#3A3960]">
          <button
            onClick={() => scrollToSection("home")}
            className="block hover:bg-[#5E686D] px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block hover:bg-[#5E686D] px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("pricing")}
            className="block hover:bg-[#5E686D] px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
          >
            Pricing
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className="block hover:bg-[#5E686D] px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="block hover:bg-[#5E686D] px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300"
          >
            Contact
          </button>
        </div>
      </div>
    )}
  </nav>
);
}

export default Navbar
