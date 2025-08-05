"use client"

const Contact = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/917224810900?text=Hi, I would like to know more about your services", "_blank")
  }

  const handleInstagram = () => {
    window.open("https://instagram.com/akku_vlogger_mp05", "_blank")
  }

  return (
    <section id="contact" className="bg-[#FAFFC5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A3960] mb-4">Get In Touch</h2>
          <p className="text-xl text-[#5E686D] max-w-2xl mx-auto">
            Ready to give your car the care it deserves? Contact us today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-[#3A3960] mb-4">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-[#A9BFA8] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#3A3960]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5E686D] font-medium">Phone</p>
                    <p className="text-[#3A3960] font-semibold">+91 72248 10900</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#A9BFA8] p-3 rounded-full mr-4 mt-1">
                    <svg className="w-6 h-6 text-[#3A3960]" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5E686D] font-medium">Address</p>
                    <p className="text-[#3A3960] font-semibold">
                      Near Honda Showroom,
                      <br />
                      Rasuliya Main Road,
                      <br />
                      Narmadapuram (M.P.)
                    </p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-[#A9BFA8] p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-[#3A3960]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.811L.029 24l6.441-1.688c1.651.896 3.504 1.372 5.547 1.372 6.621 0 11.988-5.367 11.988-11.987C23.976 5.367 18.609.001 12.017.001z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#5E686D] font-medium">Instagram</p>
                    <button
                      onClick={handleInstagram}
                      className="text-[#3A3960] font-semibold hover:text-[#5E686D] transition-colors duration-300"
                    >
                      @akku_vlogger_mp05
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 2.079.549 4.090 1.588 5.811L.029 24l6.441-1.688c1.651.896 3.504 1.372 5.547 1.372 6.621 0 11.988-5.367 11.988-11.987C23.976 5.367 18.609.001 12.017.001z" />
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Map or Additional Info */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-[#3A3960] mb-4">Why Choose Swastik?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-[#A9BFA8] p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-[#3A3960]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3960]">Professional Service</h4>
                  <p className="text-[#5E686D]">Experienced team with attention to detail</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A9BFA8] p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-[#3A3960]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3960]">Affordable Prices</h4>
                  <p className="text-[#5E686D]">Quality service at competitive rates</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A9BFA8] p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-[#3A3960]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3960]">Eco-Friendly Products</h4>
                  <p className="text-[#5E686D]">Safe for your car and the environment</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#A9BFA8] p-2 rounded-full mr-4 mt-1">
                  <svg className="w-5 h-5 text-[#3A3960]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A3960]">Quick Service</h4>
                  <p className="text-[#5E686D]">Fast turnaround without compromising quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
