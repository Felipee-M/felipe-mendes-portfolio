import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

const featuredProjects = projects.filter((project) => project.featured);

const tools = [
  "Power BI",
  "SQL",
  "Excel",
  "Python",
  "PostgreSQL",
  "Pandas",
  "GitHub",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-bold">
            Felipe Mendes
          </Link>

          <nav className="hidden gap-6 text-sm text-slate-300 md:flex">
            <a href="#sobre" className="hover:text-white">
              Sobre
            </a>
            <a href="#projetos" className="hover:text-white">
              Projetos
            </a>
            <a href="#ferramentas" className="hover:text-white">
              Ferramentas
            </a>
            <a href="#contato" className="hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Analista de Dados & BI Júnior
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Transformo dados em dashboards, relatórios e insights para decisões
            melhores.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
            Formado em Sistemas de Informação, em transição para a área de
            Dados, com foco em Business Intelligence, análise e visualização de
            informações.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projetos"
              className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
            >
              Ver projetos
            </a>

            <a
              href="https://github.com/Felipee-M"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Ver GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/felipemendessantos"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="mb-4 text-sm text-slate-400">Foco profissional</p>

          <div className="space-y-4">
            <div className="rounded-xl bg-slate-950 p-4">
              <h3 className="font-semibold text-blue-400">Business Intelligence</h3>
              <p className="mt-2 text-sm text-slate-300">
                Dashboards, indicadores e relatórios para tomada de decisão.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <h3 className="font-semibold text-blue-400">Análise de Dados</h3>
              <p className="mt-2 text-sm text-slate-300">
                Exploração, organização e interpretação de dados com SQL, Excel
                e Python.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-4">
              <h3 className="font-semibold text-blue-400">Portfólio Técnico</h3>
              <p className="mt-2 text-sm text-slate-300">
                Projetos documentados no GitHub e apresentados de forma visual.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-4 text-3xl font-bold">Sobre mim</h2>

        <p className="max-w-3xl leading-8 text-slate-300">
          Sou Felipe Mendes, formado em Sistemas de Informação e em transição
          para a área de Dados. Tenho desenvolvido projetos com foco em SQL,
          Power BI, Excel, Python e análise de informações para transformar
          dados brutos em visualizações claras e úteis para o negócio.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">O que eu entrego</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Dashboards</h3>
            <p className="text-slate-300">
              Construção de painéis para acompanhamento de indicadores,
              resultados e desempenho.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Relatórios</h3>
            <p className="text-slate-300">
              Organização de informações em relatórios claros para apoiar
              decisões operacionais e estratégicas.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Análises</h3>
            <p className="text-slate-300">
              Exploração de dados para encontrar padrões, oportunidades,
              gargalos e insights relevantes.
            </p>
          </div>
        </div>
      </section>

      <section id="projetos" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Projetos
            </span>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Projetos em destaque
            </h2>

            <p className="mt-4 text-slate-600">
              Estudos de caso com foco em dados, BI, automação, SQL, Excel e análise
              de indicadores.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-4 text-3xl font-bold">Contato</h2>

          <p className="mb-6 max-w-2xl text-slate-300">
            Estou construindo meu portfólio em Dados, BI e Analytics e aberto a
            oportunidades júnior, projetos práticos e conversas profissionais.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:felipe.m.dos.santoss@gmail.com"
              className="rounded-lg bg-blue-500 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-600"
            >
              Enviar e-mail
            </a>

            <a
              href="https://www.linkedin.com/in/felipemendessantos"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Ver LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 px-6 py-8 text-center text-sm text-slate-500">
        © 2026 Felipe Mendes. Portfólio de Dados, BI e Analytics.
      </footer>
    </main>
  );
}