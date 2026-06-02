import Link from "next/link";

const featuredProjects = [
  {
    title: "Dashboard Comercial - Power BI",
    description:
      "Dashboard para acompanhamento de faturamento, ticket médio, categorias, vendas por período e desempenho comercial.",
    tools: ["Power BI", "Power Query", "DAX"],
    href: "/projetos/dashboard-comercial",
  },
  {
    title: "Análise de E-commerce - SQL",
    description:
      "Análise de pedidos, clientes, sellers, produtos, faturamento, entrega e cancelamentos usando SQL.",
    tools: ["SQL", "PostgreSQL", "DBeaver"],
    href: "#",
  },
  {
    title: "Dashboard Financeiro - Excel",
    description:
      "Planilha/dashboard financeiro com indicadores, categorias, controle de despesas e visão mensal.",
    tools: ["Excel", "VBA", "Dashboard"],
    href: "#",
  },
];

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
              href="https://github.com/SEU-USUARIO"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 text-center font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Ver GitHub
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

      <section id="projetos" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold">Projetos em destaque</h2>
            <p className="mt-2 text-slate-300">
              Alguns projetos criados para demonstrar habilidades em Dados, BI e
              Analytics.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.title}
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

              {project.href === "#" ? (
                <span className="text-sm font-semibold text-slate-500">
                  Em breve
                </span>
              ) : (
                <Link
                  href={project.href}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Ver estudo de caso →
                </Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="ferramentas" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-8 text-3xl font-bold">Ferramentas</h2>

        <div className="flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300"
            >
              {tool}
            </span>
          ))}
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
              href="https://www.linkedin.com/in/SEU-LINKEDIN"
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