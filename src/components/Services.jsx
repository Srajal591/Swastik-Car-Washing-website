const Services = () => {
  const services = [
    {
      title: "Exterior Foam Wash",
      description: "Deep cleaning foam wash that removes dirt, grime, and road salt from your car's exterior.",
      icon: "🚗",
    },
    {
      title: "Interior Vacuuming",
      description: "Thorough vacuuming of seats, carpets, and hard-to-reach areas inside your vehicle.",
      icon: "🧹",
    },
    {
      title: "Dashboard Polishing",
      description: "Professional polishing and conditioning of dashboard, console, and interior surfaces.",
      icon: "✨",
    },
    {
      title: "Engine Steam Cleaning",
      description: "Safe and effective steam cleaning to remove grease and grime from your engine bay.",
      icon: "🔧",
    },
  ]

  return (
    <section id="services" className="bg-[#A9BFA8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A3960] mb-4">Our Services</h2>
          <p className="text-xl text-[#3A3960] max-w-2xl mx-auto">
            Professional car care services designed to keep your vehicle looking its best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#FAFFC5] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4 text-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#3A3960] mb-3 text-center">{service.title}</h3>
              <p className="text-[#5E686D] text-center leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
