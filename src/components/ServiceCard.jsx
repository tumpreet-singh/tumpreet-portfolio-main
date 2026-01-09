export default function ServiceCard({ title, description }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-sm">
        {description}
      </p>
    </div>
  )
}
