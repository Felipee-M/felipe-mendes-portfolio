import Link from "next/link";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Projetos em destaque</h2>
        <p className="mt-2 text-slate-300">
          Alguns projetos criados para demonstrar habilidades em Dados, BI e
          Analytics.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {featuredProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <h3 className="mb-3 text-xl font-semibold">{project.title}</h3>

            <p className="mb-5 text-sm leading-6 text-slate-300">
              {project.description}
            </p>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                >
                  {tool}
                </span>
              ))}
            </div>

            {project.status === "published" ? (
              <Link
                href={`/projetos/${project.slug}`}
                className="text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                Ver estudo de caso →
              </Link>
            ) : (
              <span className="text-sm font-semibold text-slate-500">
                Em breve
              </span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}