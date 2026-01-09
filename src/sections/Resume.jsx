export default function Resume() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Resume</h2>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400">
          Download my resume to learn more about my skills, experience, and projects.
        </p>

        <a
          href="/resume.pdf"
          download
          className="inline-block mt-8 px-6 py-3 rounded-md bg-black text-white dark:bg-white dark:text-black font-medium"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
