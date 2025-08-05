"use client"

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹299",
      features: ["Exterior Foam Wash", "Basic Interior Cleaning", "Tire Cleaning", "Window Cleaning"],
      popular: false,
    },
    {
      name: "Standard",
      price: "₹499",
      features: ["Everything in Basic", "Interior Vacuuming", "Dashboard Polishing", "Seat Cleaning", "Air Freshener"],
      popular: true,
    },
    {
      name: "Premium",
      price: "₹799",
      features: [
        "Everything in Standard",
        "Engine Steam Cleaning",
        "Wax Coating",
        "Leather Conditioning",
        "Complete Detailing",
      ],
      popular: false,
    },
  ]

  const handleBookService = (planName) => {
    const message = `Hi, I would like to book the ${planName} car wash package`
    window.open(`https://wa.me/917224810900?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section id="pricing" className="bg-[#FAFFC5] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A3960] mb-4">Pricing Plans</h2>
          <p className="text-xl text-[#5E686D] max-w-2xl mx-auto">Choose the perfect package for your car care needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-8 shadow-lg transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? "bg-[#3A3960] text-[#FAFFC5] scale-105" : "bg-white text-[#3A3960] hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#A9BFA8] text-[#3A3960] px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className={plan.popular ? "text-[#A9BFA8]" : "text-[#5E686D]"}>per service</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <svg
                      className={`w-5 h-5 mr-3 ${plan.popular ? "text-[#A9BFA8]" : "text-[#A9BFA8]"}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBookService(plan.name)}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#FAFFC5] text-[#3A3960] hover:bg-[#A9BFA8]"
                    : "bg-[#3A3960] text-[#FAFFC5] hover:bg-[#5E686D]"
                }`}
              >
                Book {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
