import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("dark", savedTheme === "dark")
    } else if (systemDark) {
      setTheme("dark")
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark")
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
