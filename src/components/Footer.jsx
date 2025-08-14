"use client"

const Footer = () => {
  const handleInstagram = () => {
    window.open("https://instagram.com/akku_vlogger_mp05", "_blank")
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/917224810900", "_blank")
  }

  return (
    <footer className="bg-[#3A3960] text-[#FAFFC5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Max Car Washing & Detailing</h3>
            <p className="text-[#A9BFA8] mb-4">
              Your trusted partner for premium car care services in Narmadapuram. We make your vehicle shine like new
              with professional washing and detailing.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] p-3 rounded-full hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.811L.029 24l6.441-1.688c1.651.896 3.504 1.372 5.547 1.372 6.621 0 11.988-5.367 11.988-11.987C23.976 5.367 18.609.001 12.017.001z" />
                </svg>
              </button>
              <button
                onClick={handleInstagram}
                className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#A9BFA8] hover:text-[#FAFFC5] transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#A9BFA8] hover:text-[#FAFFC5] transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#A9BFA8] hover:text-[#FAFFC5] transition-colors duration-300"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#A9BFA8] hover:text-[#FAFFC5] transition-colors duration-300"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#A9BFA8] hover:text-[#FAFFC5] transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-[#A9BFA8]">
              <p>📞 +91 72248 10900</p>
              <p>📍 Near Honda Showroom</p>
              <p>Rasuliya Main Road</p>
              <p>Narmadapuram (M.P.)</p>
              <p>📱 @akku_vlogger_mp05</p>
            </div>
          </div>
        </div>

        <div className="border-t border-[#5E686D] mt-8 pt-8 text-center">
          <p className="text-[#A9BFA8]">
            © {new Date().getFullYear()} Max Car Washing & Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
