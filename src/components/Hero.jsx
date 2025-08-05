    "use client"

const Hero = () => {
  const handleBookNow = () => {
    window.open("https://wa.me/917224810900?text=Hi, I would like to book a car wash service", "_blank")
  }

  return (
    <section id="home" className="bg-[#5E686D] text-[#FAFFC5] min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Swastik Car Washing
            <br />
            <span className="text-[#A9BFA8]">& Detailing</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Premium car care services that make your vehicle shine like new. Professional washing, detailing, and
            maintenance at affordable prices.
          </p>
          <button
            onClick={handleBookNow}
            className="bg-[#FAFFC5] text-[#3A3960] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#A9BFA8] hover:text-[#FAFFC5] transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
