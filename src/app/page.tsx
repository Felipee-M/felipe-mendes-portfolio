import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { contactLinks } from "@/data/contactLinks";

const heroMetrics = [
  {
    label: "Receita",
    value: "R$ 48,2k",
    variation: "+18%",
  },
  {
    label: "Despesas",
    value: "R$ 31,7k",
    variation: "-8%",
  },
  {
    label: "Saldo",
    value: "R$ 16,5k",
    variation: "+24%",
  },
];

const lineChartData = [
  { label: "Jan", value: 32 },
  { label: "Fev", value: 46 },
  { label: "Mar", value: 41 },
  { label: "Abr", value: 58 },
  { label: "Mai", value: 66 },
  { label: "Jun", value: 82 },
];

const maxLineValue = Math.max(...lineChartData.map((item) => item.value));

const lineChartPoints = lineChartData
  .map((item, index) => {
    const x = (index / (lineChartData.length - 1)) * 100;
    const y = 56 - (item.value / maxLineValue) * 46;

    return `${x},${y}`;
  })
  .join(" ");

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

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Portfólio de Dados, BI e Analytics
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Transformo dados em dashboards, relatórios e insights para decisões
            melhores.
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300">
            Sou Felipe Mendes, formado em Sistemas de Informação e em transição para
            Dados, com projetos práticos em Excel, SQL, Power BI, Python e análise de
            indicadores.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Ver projetos
            </a>

            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Ver GitHub
            </a>

            <a
              href={contactLinks.resume}
              download
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Baixar currículo
            </a>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Falar no WhatsApp
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
            <div>
              <strong className="block text-2xl text-white">4+</strong>
              Projetos práticos
            </div>

            <div>
              <strong className="block text-2xl text-white">5+</strong>
              Ferramentas de dados
            </div>

            <div>
              <strong className="block text-2xl text-white">BI</strong>
              Foco em dashboards
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-blue-500/20 blur-2xl" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-5 shadow-2xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                  Dashboard Preview
                </p>

                <h3 className="mt-1 text-lg font-bold text-white">
                  Análise Financeira
                </h3>
              </div>

              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                BI
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                >
                  <p className="text-xs text-slate-400">{metric.label}</p>

                  <strong className="mt-2 block text-lg font-bold text-white">
                    {metric.value}
                  </strong>

                  <span className="mt-1 block text-xs font-semibold text-emerald-400">
                    {metric.variation}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-100">
                  Evolução mensal
                </p>

                <span className="text-xs text-slate-500">Dados demonstrativos</span>
              </div>

              <div className="relative h-44">
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="border-t border-slate-800" />
                  <div className="border-t border-slate-800" />
                  <div className="border-t border-slate-800" />
                  <div className="border-t border-slate-800" />
                </div>

                <svg
                  viewBox="0 0 100 60"
                  preserveAspectRatio="none"
                  className="relative h-36 w-full overflow-visible text-blue-400"
                >
                  <defs>
                    <linearGradient id="lineChartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  <polygon
                    points={`0,60 ${lineChartPoints} 100,60`}
                    fill="url(#lineChartGradient)"
                  />

                  <polyline
                    points={lineChartPoints}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {lineChartData.map((item, index) => {
                    const x = (index / (lineChartData.length - 1)) * 100;
                    const y = 56 - (item.value / maxLineValue) * 46;

                    return (
                      <circle
                        key={item.label}
                        cx={x}
                        cy={y}
                        r="1.8"
                        fill="currentColor"
                      />
                    );
                  })}
                </svg>

                <div className="mt-2 grid grid-cols-6 text-center text-xs text-slate-500">
                  {lineChartData.map((item) => (
                    <span key={item.label}>{item.label}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950 p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Projeto em destaque
                  </p>

                  <h4 className="mt-1 font-bold text-white">
                    Dashboard Financeiro em Excel
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Indicadores, filtros dinâmicos e visão executiva para análise de
                    receitas, despesas e saldo.
                  </p>
                </div>

                <span className="hidden rounded-2xl bg-blue-500 px-3 py-2 text-xs font-semibold text-white sm:block">
                  Excel
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  Power BI
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  SQL
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  Excel
                </span>
                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
                  Python
                </span>
              </div>
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

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={contactLinks.email}
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Enviar e-mail
            </a>

            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Falar no WhatsApp
            </a>

            <a
              href={contactLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Ver LinkedIn
            </a>

            <a
              href={contactLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Ver GitHub
            </a>

            <a
              href={contactLinks.resume}
              download
              className="rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Baixar currículo
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