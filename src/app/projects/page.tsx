import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects, type Project } from "@/data/projects";

type ProjectStatus = Project["status"];

const projectSections: {
  title: string;
  status: ProjectStatus;
  description: string;
}[] = [
  {
    title: "Projetos concluídos",
    status: "Concluído",
    description:
      "Projetos já finalizados, documentados e disponíveis para apresentação.",
  },
  {
    title: "Projetos em desenvolvimento",
    status: "Em desenvolvimento",
    description:
      "Projetos em andamento que fazem parte da evolução do portfólio.",
  },
  {
    title: "Projetos planejados",
    status: "Planejado",
    description:
      "Ideias e próximos projetos previstos para fortalecer o portfólio.",
  },
];

export const metadata: Metadata = {
  title: "Projetos | Felipe Mendes",
  description:
    "Lista completa de projetos de Dados, BI, SQL, Excel, Power BI, Python e Analytics desenvolvidos por Felipe Mendes.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-bold">
            Felipe Mendes
          </Link>

          <Link href="/#projetos" className="text-sm text-slate-300 hover:text-white">
            Voltar para home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Portfólio completo
        </p>

        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
          Projetos de Dados, BI e Analytics
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-slate-300">
          Esta página reúne os projetos concluídos, em desenvolvimento e
          planejados do meu portfólio, com foco em análise de dados,
          dashboards, SQL, Excel, Power BI e organização de informações.
        </p>
      </section>

      {projectSections.map((section) => {
        const sectionProjects = projects.filter(
          (project) => project.status === section.status,
        );

        if (sectionProjects.length === 0) {
          return null;
        }

        return (
          <section key={section.status} className="mx-auto max-w-6xl px-6 pb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">{section.title}</h2>

              <p className="mt-3 max-w-2xl text-slate-300">
                {section.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sectionProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        );
      })}

      <Footer />
    </main>
  );
}