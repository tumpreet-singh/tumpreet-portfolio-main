import { Github, Twitter, User } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-3 gap-12 items-start">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-start"
        >
          <div className="w-40 h-40 rounded-full overflow-hidden border border-neutral-300 dark:border-neutral-700 flex items-center justify-center bg-neutral-100 dark:bg-neutral-900">
            {/* If image exists, it will load. Otherwise icon shows */}
            <img
              src="/images/profile.jpg"
              alt="Tumpreet Singh"
              onError={(e) => (e.currentTarget.style.display = "none")}
              className="w-full h-full object-cover"
            />
            <User className="w-16 h-16 text-neutral-400" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2"
        >
          <h2 className="text-3xl font-bold">Hi, I’m Tumpreet 👋</h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            I’m a backend-focused full stack developer who enjoys building
            secure, scalable, and production-ready web applications.
            I learn by building real things — not just tutorials.
          </p>

          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            I’ve built MERN applications, authentication systems, e-commerce
            platforms, and backend services with clean architecture and
            real-world workflows.
          </p>

         {/* Education */}
        <div className="mt-6">
        <h3 className="font-semibold text-lg">Education</h3>

            <div className="mt-4 flex gap-4 items-start">
                <img
                src="/images/pau-logo.png"
                alt="Punjab Agricultural University"
                className="w-10 h-10 object-contain"
                />
                <p className="text-neutral-600 dark:text-neutral-400">
                <strong>Master of Computer Applications (MCA)</strong><br />
                Punjab Agricultural University <br />
                2025 – 2027
                </p>
            </div>

            <div className="mt-4 flex gap-4 items-start">
                <img
                src="/images/gndec-logo.png"
                alt="GNDEC"
                className="w-10 h-10 object-contain"
                />
                <p className="text-neutral-600 dark:text-neutral-400">
                <strong>Bachelor of Computer Applications (BCA)</strong><br />
                Guru Nanak Dev Engineering College <br />
                2021 – 2024
                </p>
            </div>
            </div>


          {/* Interests */}
          <div className="mt-6">
            <h3 className="font-semibold text-lg">Interests</h3>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              Backend architecture, authentication systems, databases,
              performance optimization, and learning new technologies.
            </p>
          </div>

          {/* CTA */}
          <p className="mt-6 text-neutral-600 dark:text-neutral-400">
            I’m open to internships, full-time roles, and selective freelance
            work. If you’re hiring or want to collaborate on something meaningful,
            feel free to reach out — I respond quickly.
          </p>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:opacity-70"
            >
              <Github />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              className="hover:opacity-70"
            >
              <Twitter />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
