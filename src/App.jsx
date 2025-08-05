import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Pricing from "./components/Pricing"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./App.css"
import "./index.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
