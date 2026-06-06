import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-2xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-blue-400">
          Projetos
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Projetos em destaque
        </h2>

        <p className="mt-4 text-slate-300">
          Estudos de caso com foco em dados, BI, automação, SQL, Excel e análise
          de indicadores.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}