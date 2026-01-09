import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"
import { User } from "lucide-react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
            <img
              src="/images/profile.jpg"
              alt="Tumpreet"
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="w-full h-full object-cover"
            />
            <User className="w-5 h-5 text-neutral-400" />
          </div>

          {!scrolled && (
            <span className="font-semibold">Tumpreet Singh</span>
          )}
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:opacity-70">About</a>
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="#services" className="hover:opacity-70">Services</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
