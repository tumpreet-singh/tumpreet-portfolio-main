import { Github, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Have a project or want to work together? Let’s talk.
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href="mailto:your.email@gmail.com"
            className="px-6 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            Email Me
          </a>

          <a href="https://github.com/yourusername" target="_blank">
            <Github />
          </a>

          <a href="https://twitter.com/yourhandle" target="_blank">
            <Twitter />
          </a>
        </div>
      </div>
    </section>
  )
}
