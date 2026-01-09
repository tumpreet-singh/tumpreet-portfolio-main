import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-24"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold leading-tight"
        >
          Backend-Focused Full Stack Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-neutral-600 dark:text-neutral-400"
        >
          I build secure, scalable web applications and e-commerce platforms
          using MERN, PHP, and WordPress.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="px-6 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            download
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
