import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Have a project, opportunity, or idea? Let’s connect.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          
          {/* Email */}
          <a
            href="mailto:your.email@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <Mail size={18} />
            Email Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          {/* X / Twitter */}
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            className="flex items-center gap-2 px-5 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            <Twitter size={18} />
            X (Twitter)
          </a>
        </div>
      </div>
    </section>
  )
}
