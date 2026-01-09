import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Services from "./sections/Services"
import Projects from "./sections/Projects"
import TechStack from "./sections/TechStack"
import Resume from "./sections/Resume"
import Contact from "./sections/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <TechStack />
      <Resume />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
