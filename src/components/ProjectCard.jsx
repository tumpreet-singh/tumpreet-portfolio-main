export default function ProjectCard({ title, stack, description, github }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 flex flex-col justify-between">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-neutral-500 mt-1">{stack}</p>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm">
          {description}
        </p>
      </div>

      <a
        href={github}
        target="_blank"
        className="mt-4 text-sm font-medium underline underline-offset-4"
      >
        View on GitHub
      </a>
    </div>
  )
}
