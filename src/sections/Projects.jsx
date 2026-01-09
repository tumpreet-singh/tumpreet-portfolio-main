import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">Projects</h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
