import { ProjectImageGallery } from "@/components/projects/ProjectImageGallery";
import Link from "next/link";
import type { ProjectCase } from "@/data/projectCases";

type ProjectCaseLayoutProps = {
  project: ProjectCase;
};

export function ProjectCaseLayout({ project }: ProjectCaseLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-bold">
            Felipe Mendes
          </Link>

          <Link
            href="/#projetos"
            className="text-sm text-slate-300 hover:text-white"
          >
            Voltar para projetos
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-5xl px-6 py-16">
        <section className="mb-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            {project.label}
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            {project.title}
          </h1>

          <p className="mb-8 max-w-3xl text-lg leading-8 text-slate-300">
            {project.description}
          </p>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
              Resumo do projeto
            </p>

            <p className="mt-3 leading-8 text-slate-300">{project.summary}</p>
          </div>
        </section>

        <section className="mb-12 grid gap-6 md:grid-cols-3">
          <InfoBlock title="Contexto" text={project.context} />
          <InfoBlock title="Problema" text={project.challenge} />
          <InfoBlock title="Solução" text={project.solution} />
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Ferramentas usadas</h2>

          <div className="flex flex-wrap gap-3">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Principais indicadores</h2>

          <div className="grid gap-4 md:grid-cols-3">
            {project.indicators.map((indicator) => (
              <div
                key={indicator}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
              >
                <p className="text-sm text-slate-400">Indicador</p>
                <h3 className="mt-2 text-xl font-semibold">{indicator}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Processo</h2>

          <ol className="list-decimal space-y-3 pl-6 leading-8 text-slate-300">
            {project.process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <ProjectImageGallery images={project.images} />

        {project.video && (
          <section className="mb-12">
            <h2 className="mb-4 text-2xl font-bold">{project.video.title}</h2>

            <p className="mb-6 leading-8 text-slate-300">
              {project.video.description}
            </p>

            <div className="overflow-hidden rounded-2xl border border-slate-800">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={project.video.embedUrl}
                  title={project.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-bold">Impacto</h2>

          <ul className="list-disc space-y-3 pl-6 leading-8 text-slate-300">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-bold">Links</h2>

          <div className="flex flex-col gap-4 sm:flex-row">
            {project.links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={getLinkClassName(link.variant)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={getLinkClassName(link.variant)}
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </section>
      </article>
    </main>
  );
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <p className="leading-8 text-slate-300">{text}</p>
    </div>
  );
}
function getLinkClassName(variant: ProjectCase["links"][number]["variant"]) {
  const baseClassName =
    "rounded-lg px-6 py-3 text-center font-semibold transition";

  if (variant === "primary") {
    return `${baseClassName} bg-blue-500 text-white hover:bg-blue-600`;
  }

  return `${baseClassName} border border-slate-700 text-slate-100 hover:border-slate-500`;
}