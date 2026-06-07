import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative h-48 w-full bg-slate-100">
        <Image
          src={project.image}
          alt={`Imagem do projeto ${project.title}`}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {project.category}
          </span>

          <span className="text-xs font-medium text-emerald-700">
            {project.status}
          </span>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-950">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          <p className="mt-3 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium leading-6 text-blue-700">
            {project.impactShort}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600"
            >
              {tool}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.caseUrl ? (
            <Link
              href={project.caseUrl}
              className="rounded-lg bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Ver estudo de caso
            </Link>
          ) : (
            <span className="rounded-lg bg-slate-100 px-4 py-2 text-sm font-medium text-slate-500">
              Estudo de caso em breve
            </span>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              GitHub
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}