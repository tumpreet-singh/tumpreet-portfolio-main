import { useEffect, useState } from "react"
import ThemeToggle from "./ThemeToggle"
import { User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* LEFT: Profile + Animated Name */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 flex items-center justify-center">
            <img
              src="/images/profile.jpeg"
              alt="Tumpreet"
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="w-full h-full object-cover"
            />
            <User className="w-5 h-5 text-neutral-400" />
          </div>

          {/* Animated Name */}
          <AnimatePresence>
            {!scrolled && (
              <motion.span
                key="name"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="font-semibold whitespace-nowrap"
              >
                Tumpreet Singh
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="hover:opacity-70">About</a>
            <a href="#projects" className="hover:opacity-70">Projects</a>
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </div>

          {/* Mobile CTA */}
          <a
            href="#contact"
            className="md:hidden px-4 py-2 rounded-md border border-neutral-300 dark:border-neutral-700 text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            Contact
          </a>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
