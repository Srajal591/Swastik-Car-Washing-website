
import redwash from "../assets/redwash.webp";
import interior from "../assets/Interior-clening.jpg";
import FormWash from "../assets/Foam-washing.webp";
import EngineSteamCleaning from "../assets/Engian-steam-clening.avif";
import DashboardPolising from "../assets/Dashboard.jpg";
import CompleteResult from "../assets/Complete.JPEG";

const Gallery = () => {
  const images = [
  {
    src: redwash,
    alt: "Clean red car after professional wash",
  },
  {
    src: interior,
    alt: "Interior detailing service",
  },
  {
    src: FormWash,
    alt: "Foam wash process",
  },
  {
    src: EngineSteamCleaning,
    alt: "Engine steam cleaning",
  },
  {
    src: DashboardPolising,
    alt: "Dashboard polishing",
  },
  {
    src:  CompleteResult,
    alt: "Complete detailing result",
  },
];


  return (
    <section id="gallery" className="bg-[#A9BFA8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A3960] mb-4">Our Work Gallery</h2>
          <p className="text-xl text-[#3A3960] max-w-2xl mx-auto">
            See the amazing transformations we've achieved for our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3A3960]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-[#FAFFC5]">
                  <p className="font-semibold">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
